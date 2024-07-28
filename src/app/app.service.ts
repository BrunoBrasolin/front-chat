import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatDto } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  public sendUserMessage(dto: ChatDto): Observable<string> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    const response = this.http.post<string>(`https://api.gamidas.dev.br/chat/`, dto, { headers });

    return response;
  }
}
