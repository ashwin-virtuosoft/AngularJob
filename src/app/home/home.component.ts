import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Interfaces/employee';
import { HttpService } from '../Service/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  HomeList: IEmployee[] = [];
  displayedColumns: string[] = ['UserId', 'FirstName', 'LastName', 'Email','PhoneNumber'];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getUserDetails().subscribe(
      result => {
        console.log(result);
        this.HomeList = result;
      });
  }
}
