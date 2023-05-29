import { Route, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateOrder } from 'src/app/models/create-order';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { OrderManagementService } from 'src/app/services/Order-Management/order-management.service';
import { Address } from 'src/app/models/address.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  chooseValue:any;
  productlist: Products[] = [];
  addressList: Address[] = [];
  totalAmount:number;
  order:CreateOrder={
    email: '',
    productList: '',
    addressId:''
  }
  
  constructor(private service:OrderManagementService,
    private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    var setProductData = JSON.parse(JSON.stringify(localStorage.getItem("productlist")));
    var checkData = JSON.parse(setProductData);
    this.productlist = checkData;
    var setAddressData = JSON.parse(JSON.stringify(localStorage.getItem("addressList")));
    var checkAddress = JSON.parse(setAddressData);
    this.addressList = checkAddress;

    this.productlist.forEach(element =>{
      this.totalAmount = element.price * element.quantity;
    });

    this.service.getAddress(JSON.parse(localStorage.getItem("userId"))).subscribe({
      next:(res) =>{
        this.addressList = res.data;
      }
    })
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

  // Delete Cart order
  onDelete(id:any){
    this.productlist.forEach((element, ind) =>{
      if(element.productId == id){
        this.productlist.splice(ind, 1);
        localStorage.setItem("productList", JSON.stringify(this.productlist));
        this.ngOnInit();
      }
    });
  } 



  plusQuantity(id:any){
    this.productlist.forEach(element =>{
      if(element.productId == id){
        if(element.quantity <=10){
          element.quantity += 1;
        }
      }
    });
    localStorage.setItem('productList', JSON.stringify(this.productlist));
    this.ngOnInit();
  }

  minusQuantity(id:any){
    this.productlist.forEach(element =>{
      if(element.productId == id){
        element.quantity -= 1;
      }
    });
    localStorage.setItem('productList', JSON.stringify(this.productlist));
    this.ngOnInit();
  }

  onSubmit(Value:any){
    this.chooseValue = Value
  }
}
