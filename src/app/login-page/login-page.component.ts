import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../Service/http.service';
import { ILogin } from '../Interfaces/Login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  LoginForm: FormGroup;
  constructor(private httpService:HttpService){}

  ngOnInit(): void {
    this.LoginForm=new FormGroup({
      email:new FormControl('',Validators.required),
      Password:new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
    if(this.LoginForm.valid){
      alert("Login Success");
      console.log(this.LoginForm.value);

      const login:ILogin={
        Email:this.LoginForm.value.email,
        Password:this.LoginForm.value.Password
      }

      this.httpService.LoginUser(login).subscribe((response : any)=>{
        console.log("Token:", response.token);
        console.log("Message:", response.message);
      })
    }
  }
  
}
