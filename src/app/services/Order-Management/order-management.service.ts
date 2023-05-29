import { CreateOrder } from 'src/app/models/create-order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { Order } from 'src/app/models/orders.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {
  registeredUsers = new BehaviorSubject<any>(null);
  baseApiUrl: string = environment.baseapiUrl;

  constructor(private http: HttpClient) { }

  // Get all order
  getAllOrders(): Observable<any> {
    return this.http.get(this.baseApiUrl + '/api/GetOrders')
  }

  // Getting all products
  getAllProducts(): Observable<any> {
    return this.http.get(this.baseApiUrl + '/api/GetProducts');
  }

  // adding order
  createOrder(orderItem: CreateOrder): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/CreateOrder', orderItem);

  }
  // Adding Address
  addAddress(addReq: Address): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/AddAddress', addReq)
  }


  // getting list of address
  getAddress(id:number): Observable<any> {
    return this.http.get(this.baseApiUrl + '/api/GetAddressList/?id='+id)
  }
}
