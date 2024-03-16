import { DataUser } from '../../models/signupData';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ValidDataService } from '../../services/valid-data.service';

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
    private formBuilder: FormBuilder,
    private validData: ValidDataService
  ) {}

  dataUser = this.formBuilder.group({
    name: ['name', Validators.required],
    email: ['email', Validators.required],
    cpf: ['cpf', Validators.required],
    password: ['password', Validators.required],
    repeatPassword: ['password', Validators.required],
    agreeTerms: [false, Validators.required],
  });


  dataUserValid = this.validData.validSignup(this.dataUser.value)
  

  onSubmit(): void {
    this.api.signup(this.dataUserValid).subscribe( {
      next: (res) => {
        console.log('Cadastro bem-sucedido!', res);
      },
      error: (erro) => {
        alert("Erro ao cadastrar:");
        console.log(erro)
      }
    }
    );
  }
}

  