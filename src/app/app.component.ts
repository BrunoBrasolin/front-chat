import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatSender } from './app.enum';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatMessage } from './app.interface';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { ChatDto } from './app.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent {
  public loading: boolean | null = null;
  private userInput = new FormControl('', [Validators.required]);
  public messages: ChatMessage[] = [];
  public chatForm: FormGroup = this.formBuilder.group({
    userInput: this.userInput
  });
  isRecording = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
  ) { }

  async toggleRecording() {
    if (!this.isRecording) {
      this.isRecording = true;

      await this.service.startRecording();

    } else {
      this.isRecording = false;

      const audioBlob = this.service.stopRecording();

      if (audioBlob)
        this.service.sendUserAudio(audioBlob).subscribe((result: ChatDto) => {

          this.loading = false;
          this.messages.push({ sender: ChatSender.Chatbot, message: result.message });
          this.scrollToBottom();
        });
    }
  }

  public handleMessageSent(): void {
    const userMessage = this.userInput.value;
    if (userMessage == null || userMessage == "") {
      alert("Favor informar uma mensagem.");
      return;
    }
    this.loading = true;
    this.userInput.setValue("");

    this.messages.push({ sender: ChatSender.User, message: userMessage });
    this.scrollToBottom();

    const dto: ChatDto = {
      message: userMessage,
      language: "portuguese"
    }

    this.service.sendUserMessage(dto).subscribe(
      (result: ChatDto) => {
        this.loading = false;
        this.messages.push({ sender: ChatSender.Chatbot, message: result.message });
        this.scrollToBottom();
      }
    );
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      document.querySelector("#chatEnd")?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 1);
  }
}
