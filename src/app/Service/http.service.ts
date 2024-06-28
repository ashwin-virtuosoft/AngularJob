import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from '../Interfaces/employee';
import { IDemo } from '../Interfaces/Demo';
import { emit } from 'node:process';
import { ILogin } from '../Interfaces/Login';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  apiUrl="https://localhost:44300";
  
  constructor(private http: HttpClient) { }

  getUserDetails(){
    return this.http.get<IEmployee[]>(this.apiUrl+"/api/Home/AdminGet");
  }
  AddUserDetails(employee:IDemo){
    return this.http.post(this.apiUrl+"/api/UserType/userType",employee);
  }
  LoginUser(login:ILogin){
    return this.http.post(this.apiUrl+"/api/Login",login);
  }
}
