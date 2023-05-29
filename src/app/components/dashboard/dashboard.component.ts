import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { OrderManagementService } from 'src/app/services/Order-Management/order-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productlist:Products[] = [];
  productlistdata: Products[] = [];
  constructor(private service:OrderManagementService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next:(response) =>{
        this.productlist = response.data;
      }
    })
  }

  onLogout(){
    localStorage.removeItem('userData');
    localStorage.removeItem('userId');
    this.router.navigate(['login']);
  }
  
  addToCart(products:Products){
    debugger
    var jsonData = JSON.parse(localStorage.getItem('productlist'));
    var count = 0;

    if(jsonData!=null){
      jsonData.forEach(element => {
        if (element.productId == products.productId){
          this.toastr.error("It is already in the cart")
          count++;
        }
      });
    }

    if (localStorage.getItem('productlist')!=null && count == 0){
      this.productlistdata = JSON.parse(localStorage.getItem('productlist'));
      this.productlistdata.push(products);
      this.toastr.success("Added to cart:)");
    }else{
      if(count == 0){
        this.productlistdata.push(products)
        this.toastr.success("Added to cart...");
      }
    }
    if(count == 0){
      this.productlistdata.forEach(element =>{
        element.quantity=1;
      });
      localStorage.setItem("productlist", JSON.stringify(this.productlistdata));
    }
  }
}
