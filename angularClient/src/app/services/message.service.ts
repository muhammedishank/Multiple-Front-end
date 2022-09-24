import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageUrl ="http://localhost:5000/api/auth/register"
  constructor(private http:HttpClient) { }

  sendMessage(data:any){
    return this.http.post<any>(this.messageUrl,data)
  }

}
