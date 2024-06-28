import { Component, OnInit,Input } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";


@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrl: './logged-in.component.css'
})

export class LoggedInComponent implements OnInit{
 
  constructor(private authService:SocialAuthService){}
  @Input() user: SocialUser;
  loggedIn:any

  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
}
