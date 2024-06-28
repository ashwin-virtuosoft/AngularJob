import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { JobSeekerRegisterComponent } from './job-seeker-register/job-seeker-register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'RegisterForm',component:RegisterFormComponent},
  {path:'Home',component:HomeComponent},
  {path:'employeeRegister',component:EmployeeRegisterComponent},
  {path:'jobSeekerRegister',component:JobSeekerRegisterComponent},
  {path:'LoggedInUser',component:LoggedInComponent},
  {path:'LoginForm',component:LoginPageComponent},
  {path:'',component:LandingPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
