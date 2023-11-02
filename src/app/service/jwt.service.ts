import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private apiUrl = 'http://localhost:8080/api'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  createCheckoutSession(jwtRequest: any): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<string>(`${this.apiUrl}/create-checkout-session`, jwtRequest, {
      headers,
      responseType: 'text' as 'json'
    });
  }
}
