import { Component} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../core/services/api.service';
import { ValidDataService } from '../../services/valid-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor (
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private validData: ValidDataService
    ) {}

  dataLogin = this.formBuilder.group({
    email: '',
    password: ''
  });

  DataLoginValid = this.validData.validLogin(this.dataLogin.value)
  

  onSubmit(): void {
    console.log(this.dataLogin.value);
    this.api.login(this.dataLogin.value).subscribe({
      next: (res) => {
        console.log('login bem sucedido.', res);
      },
      error: (erro) => {
        alert("erro ao logar.");
        console.log(erro)
      }
    });
  }
}