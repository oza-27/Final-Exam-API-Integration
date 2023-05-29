import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { User } from 'src/app/models/user.modle';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registeredUsers = new BehaviorSubject<any>(null); 
  baseApiUrl:string = environment.baseapiUrl;

  constructor(private http:HttpClient, private router:Router) { }
  
  // Register
  registration(user:User):Observable<any>{
    return this.http.post(this.baseApiUrl + "/api/registration", user);
  }

  // Login
  login(login:Login):Observable<any>{
    return this.http.post(this.baseApiUrl + '/api/Login', login);
  }

  // logout
  onLogout(){
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    this.router.navigate(['login']);
  }
}
