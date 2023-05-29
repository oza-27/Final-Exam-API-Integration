import { Route, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateOrder } from 'src/app/models/create-order';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { OrderManagementService } from 'src/app/services/Order-Management/order-management.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  productlist: Products[] = [];
  order:CreateOrder={
    email: '',
    productList: ''
  }
  
  constructor(private service:OrderManagementService,
    private router:Router) { }

  ngOnInit(): void {
    var setProductData = JSON.parse(JSON.stringify(localStorage.getItem("productlist")));
    var checkData = JSON.parse(setProductData);
    this.productlist = checkData;
  }

  createOrder(){
    this.order.email = String(localStorage.getItem('userData'));
    this.order.productList = this.productlist;

    if(localStorage.getItem("userData") == null){
      this.router.navigate(['/login']);
    }else{
      this.service.createOrder(this.order).subscribe({
        next:(res) =>{
          if(res.Status == true){
            localStorage.removeItem("productList");
          }
        },error:(error) =>{
          console.log(error);
        }
      })
    }
  }
  onDelete(){
    
  }
}
