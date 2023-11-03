import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private apiUrl = 'http://localhost:4242';

  constructor(private http: HttpClient) {}

  createCheckoutSession(jwtRequest: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}/create-checkout-session`, jwtRequest, {
      headers: headers
    });
  }

}
