import { Component } from '@angular/core';
import { ChatSender } from './app.enum';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatMessage } from './app.interface';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent {
  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
  ) { }

  public loading: boolean | null = null;
  private userInput = new FormControl('', [Validators.required]);
  public messages: ChatMessage[] = [];
  public chatForm: FormGroup = this.formBuilder.group({
    userInput: this.userInput
  });

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

    this.service.sendUserMessage(userMessage).subscribe(
      result => {
        this.loading = false;
        this.messages.push({ sender: ChatSender.Chatbot, message: result.candidates[0].content.parts[0].text });
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
