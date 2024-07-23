import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from './app.interface';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  public sendUserMessage(message: string): Observable<APIResponse> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      "contents": [
        {
          "parts": [
            {
              "text": message
            }
          ]
        }
      ]
    };

    const response = this.http.post<APIResponse>(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${environment.apiKey}`, body, { headers });

    return response;
  }
}
