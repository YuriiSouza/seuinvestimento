import { InvestimentComponent } from './home/investiment/investiment.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { EstateComponent } from './home/estate/estate.component';
import { StatamentComponent } from './home/statement/statament.component';
import { ReportComponent } from './home/report/report.component';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'landingpage' , component: LandingPageComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},

  {
    path: 'home', 
    component: HomeComponent,
    children: [
      {path: 'resumo', component: DashboardComponent},
      {path: 'estatistica', component: EstateComponent},
      {path:'investimento', component: InvestimentComponent},
      {path: 'extrato', component: EstateComponent},
      {path: 'patrimonio', component: StatamentComponent},
      {path: 'relatorio', component: ReportComponent},
    ]
  }];
