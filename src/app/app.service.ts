import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatDto, TranscriptAudioDto } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private audioContext: AudioContext | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];

  constructor(private http: HttpClient) { }

  public sendUserMessage(dto: ChatDto): Observable<ChatDto> {
    const response = this.http.post<ChatDto>(`http://localhost:8080/message`, dto);

    return response;
  }

  async startRecording() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(stream);

    this.mediaRecorder.ondataavailable = (event) => {
      this.audioChunks.push(event.data);
    };

    this.mediaRecorder.start();
  }

  stopRecording(): Blob | null {
    if (this.mediaRecorder && this.audioContext) {
      this.mediaRecorder.stop();

      const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
      this.audioChunks = [];

      return audioBlob;
    }

    return null;
  }

  transcriptAudio(audioBlob: Blob) {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');

    return this.http.post<TranscriptAudioDto>('http://localhost:80s80/transcript_audio', formData);
  }
}
