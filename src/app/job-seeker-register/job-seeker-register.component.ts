import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-job-seeker-register',
  templateUrl: './job-seeker-register.component.html',
  styleUrl: './job-seeker-register.component.css'
})
export class JobSeekerRegisterComponent {
  reactiveForm:FormGroup;

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      phoneNumber:new FormControl(null,Validators.required),
      Date:new FormControl(null,Validators.required)
    });
  }
  
  onSubmit(){
      alert("Registered");
      console.log(this.reactiveForm);
  }
}
