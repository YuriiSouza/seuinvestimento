import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://api:3000';
  
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

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    let name = dataUser.name;
    let email = dataUser.email;
    let cpf = dataUser.cpf;
    let password = dataUser.password;
    let repeatPassword = dataUser.repeatPassword;
    let agreeTerms = dataUser.agreeTerms;




    let Params = new HttpParams()
    try {  
      Params = Params.append('name', name);
      Params = Params.append('email', email);
      Params = Params.append('cpf', cpf);
      Params = Params.append('password', password);
      Params = Params.append('repeatPassword', repeatPassword);
      Params = Params.append('agreeTerms', agreeTerms);
    } catch (error) {
      throw new Error('parâmetros inválidos')
    }
    
    
    return this.http.post(`${this.host}/login/signup`,  {header, Params}).pipe(
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
    return throwError('Algo deu errado. Por favor, tente novamente mais tarde.');
  }
}
