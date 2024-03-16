import { Injectable } from '@angular/core';
import { DataUser } from '../models/signupData';
import { DataLogin } from '../models/loginData';

@Injectable({
  providedIn: 'root'
})
export class ValidDataService {

  constructor() { }

  validSignup(data: any): DataUser {
    const validData: DataUser = {
      name: '',
      email: '',
      cpf: '',
      password: '',
      repeatPassword: '',
      agreeTerms: false,
    };
  
    if (data.name) {
      validData.name = data.name;
      validData.email = data.email;
      validData.cpf = data.cpf;
      validData.password = data.password;
      validData.repeatPassword = data.repeatPassword;
      validData.agreeTerms = data.agreeTerms
    }
  
    return validData;
  };

  validLogin(data: any): DataLogin {
    const validData: DataLogin = {
      email: '',
      password: ''
    };

    if (data.email) {
      validData.email = data.email;
      validData.password = data.password;
    }

    return validData
  };
}
