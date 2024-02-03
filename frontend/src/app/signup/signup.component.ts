import { DataUser } from './../data';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor (
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  dataUser = this.formBuilder.group({
    name: ['name', Validators.required],
    email: ['email', Validators.required],
    cpf: ['cpf', Validators.required],
    password: ['password', Validators.required],
    repeatPassword: ['password', Validators.required],
    agreeTerms: [false, Validators.required],
  });

  valid(data: any): DataUser {
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
  }

  dataUserValid = this.valid(this.dataUser.value)
  

  onSubmit(): void {
    console.log(this.dataUserValid);
    this.api.signup(this.dataUserValid).subscribe(
      (response) => {
        console.log('Cadastro bem-sucedido!', response);
      },
      (error) => {
        console.error('Erro ao cadastrar:', error);
      }
    );
  }
}

  