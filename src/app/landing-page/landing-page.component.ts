import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  constructor(private router:Router){}

  navigate(){
    alert("Register");
    this.router.navigate(['/RegisterForm']);
  }
  Loginto(){
    this.router.navigate(['/LoginForm']);
  }
}
