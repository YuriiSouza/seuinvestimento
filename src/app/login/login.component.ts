
import { Component} from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api/api.service';

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

  dataLogin = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor (
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.api.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
  

  onSubmit(): void {
    console.log(this.dataLogin.value);
    this.api.login(this.dataLogin.value).subscribe(
      (response) => {
        console.log('Cadastro bem-sucedido!', response);
      },
      (error) => {
        console.error('Erro ao logar:', error);
      }
    );
  }
}