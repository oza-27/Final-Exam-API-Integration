import { User } from './../models/user.modle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl:string = environment.baseapiUrl;

  constructor(private http:HttpClient) { }

  registration(user:User){
    return this.http.post(this.baseApiUrl + "/api/registration", user);
  }

  getAllOrders():Observable<any>{
    return this.http.get(this.baseApiUrl + '/api/GetOrders')
  }

  getAllProducts():Observable<any>{
    return this.http.get(this.baseApiUrl + '/api/GetProducts');
  }


  // Adding Address
  addAddress(addReq:Address):Observable<any>{
    return this.http.post(this.baseApiUrl + '/api/AddAddress',addReq)
  }


  // getting list of address
  getAddress():Observable<any>{
    return this.http.get(this.baseApiUrl + '/api/GetAddress')
  }
}
