
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
    try {
      this.api.login(this.dataLogin)
      this.router.navigate(['/resumo'])
    } catch {
      this.router.navigate(['/signup'])
      console.log("erro no cadastro")
    }
  }
}