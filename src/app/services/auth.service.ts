import { User } from './../models/user.modle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address.model';
import { Login } from '../models/login.model';
import { Order } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl:string = environment.baseapiUrl;

  constructor(private http:HttpClient) { }
  
  // Register
  registration(user:User){
    return this.http.post(this.baseApiUrl + "/api/registration", user);
  }

  // Login
  login(login:Login){
    return this.http.post(this.baseApiUrl + '/api/Login', login);
  }

  // Get all order
  getAllOrders():Observable<any>{
    return this.http.get(this.baseApiUrl + '/api/GetOrders')
  }

  // Getting all products
  getAllProducts():Observable<any>{
    return this.http.get(this.baseApiUrl + '/api/GetProducts');
  }

  // adding order
  createOrder(orders:Order):Observable<any>{
    return this.http.post(this.baseApiUrl + '/api/CreateOrder', orders);

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
