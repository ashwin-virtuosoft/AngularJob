import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../Service/register.service';
import { HttpService } from '../Service/http.service';
import { IEmployee } from '../Interfaces/employee';
import { IDemo } from '../Interfaces/Demo';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  RegisterForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  userType:string;

  constructor(private httpService:HttpService,private authService: SocialAuthService, private router:Router){}

  ngOnInit(): void {
    // Initialize form group
     // this.registerService.SendData();
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, this.onlyLetters]),
      lastName: new FormControl('', [Validators.required, this.onlyLetters]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, this.phoneNo]),
      userType: new FormControl('', [Validators.required]),
      Password:new FormControl('',[Validators.required])
    });
  
    // Subscribe to authState
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);

      if(this.loggedIn){
        this.router.navigate(['/LoggedInUser']);
      }
    });
   
  }
  

  onSubmit() {
    if (this.RegisterForm.valid) {
      alert("Registered");
      console.log(this.RegisterForm.value);
      

      const employee:IDemo={
          FirstName:this.RegisterForm.value.firstName,
          LastName:this.RegisterForm.value.lastName,
          Email:this.RegisterForm.value.email,
          PhoneNumber:this.RegisterForm.value.phoneNumber,
          UserType:this.RegisterForm.value.userType,
          Password:this.RegisterForm.value.Password

      }

      this.httpService.AddUserDetails(employee).subscribe(()=>{
        console.log("success");
      });

    } else {
      alert("Form has errors. Please check.");
    }
  }

  // noSpaceAllowed(control: FormControl) {
  //   if (control.value != null && control.value.trim() === '') {
  //     return { noSpaceAllowed: true };
  //   }
  //   return null;
  // }

  onlyLetters(control:FormControl){
    if(!/^[a-zA-Z]*$/.test(control.value)){
      return {onlyLetters:true}
    }
    return null;
  }

  phoneNo(control: FormControl) {
    if (control.value != null && control.value.toString().length > 10) {
      return { phoneNo: true };
    }
    return null;
  }

 


}
