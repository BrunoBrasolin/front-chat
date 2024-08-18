import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatSender } from './app.enum';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatMessage, LoadingInterface, TranscriptAudioDto } from './app.interface';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { ChatDto } from './app.interface';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent {
  public loading: LoadingInterface = {
    owner: ChatSender.Chatbot,
    loading: null
  };
  private userInput = new FormControl('', [Validators.required]);
  public messages: ChatMessage[] = [];
  public chatForm: FormGroup = this.formBuilder.group({
    userInput: this.userInput
  });
  public isRecording: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
  ) { }

  async toggleRecording(): Promise<void> {
    if (!this.isRecording) {
      this.isRecording = true;

      try {
        await this.service.startRecording();
      }
      catch {
        this.addMessage(ChatSender.Chatbot, 'Ocorreu um erro na gravação do seu áudio.');
      }

    } else {
      this.isRecording = false;

      const audioBlob = this.service.stopRecording();

      if (!audioBlob) {
        this.addMessage(ChatSender.Chatbot, 'Não entendi, poderia repetir?');
        return;
      }

      this.setUserLoading(true);

      this.service.transcriptAudio(audioBlob)
        .pipe(finalize(() => {
          this.setUserLoading(false);
        }))
        .subscribe((result: TranscriptAudioDto) => {
          if (!result.message) {
            this.addMessage(ChatSender.User, "");
            this.addMessage(ChatSender.Chatbot, 'Não entendi, poderia repetir?');
            return;
          }

          this.addMessage(ChatSender.User, result.message);

          this.sendUserMessage(result.message);
        });
    }
  }

  public handleMessageSent(): void {
    const userMessage = this.userInput.value;

    if (userMessage == null || userMessage == "") {
      alert("Favor informar uma mensagem.");
      return;
    }

    this.sendUserMessage(userMessage);
  }

  private sendUserMessage(message: string) {
    this.setBotLoading(true);

    try {
      this.userInput.setValue("");

      this.addMessage(ChatSender.User, message);

      const dto: ChatDto = {
        message: message,
        language: "portuguese"
      }

      this.service.sendUserMessage(dto)
        .pipe(finalize(() => {
          this.setBotLoading(false);
        }))
        .subscribe(
          (result: ChatDto) => {
            this.setBotLoading(false);
            this.addMessage(ChatSender.Chatbot, result.message);
          }
        );
    }
    catch {
      this.addMessage(ChatSender.Chatbot, "Ocorreu um erro, poderia tentar novamente?");
      this.setBotLoading(false);
    }
  }

  private setBotLoading(loading: boolean | null): void {
    this.loading = {
      owner: ChatSender.Chatbot,
      loading: loading
    }
  }

  private setUserLoading(loading: boolean | null): void {
    this.loading = {
      owner: ChatSender.User,
      loading: loading
    }
  }

  private addMessage(sender: ChatSender, message: string): void {
    this.messages.push({ sender, message });
    setTimeout(() => {
      document.querySelector("#chatEnd")?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 1);

  }
}
