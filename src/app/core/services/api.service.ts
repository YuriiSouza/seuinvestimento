import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  login(dataLogin: {}): Observable<any> {

    return this.http.post(`${this.host}/login`, dataLogin).pipe(
      catchError(this.handleError)
    );
  }

  signup(dataUser: {
    name: string,
    email: string,
    cpf: string,
    password: string,
    repeatPassword: string,
    agreeTerms: boolean
    }): Observable<any> {
    
    
    return this.http.post(`${this.host}/login/signup`,  dataUser).pipe(
      catchError(this.handleError)
    );
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.host}/login`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro na requisição:', error);
    return throwError(() => error);
  }
}
