import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrl: './employee-register.component.css'
})
export class EmployeeRegisterComponent implements OnInit{
  reactiveForms:FormGroup;

  ngOnInit(): void {
    this.reactiveForms=new FormGroup({
      firstName:new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      lastName:new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      phoneNumber:new FormControl(null,Validators.required)
    });
  }
  
  onSubmit(){
          alert("Registered");
         console.log(this.reactiveForms);
  }

  noSpaceAllowed(control:FormControl){
    if(control.value!=null && control.value.indexOf('')!=-1){
      return {noSpaceAllowed:true}
    }
      return null;
  }

}
