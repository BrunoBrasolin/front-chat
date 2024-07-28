import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatDto } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  public sendUserMessage(dto: ChatDto): Observable<ChatDto> {
    const response = this.http.post<ChatDto>(`https://api.gamidas.dev.br/chat/`, dto);

    return response;
  }
}
