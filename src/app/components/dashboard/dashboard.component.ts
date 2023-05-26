import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:Products[] = [];
  productlistdata: Products[] = [];
  constructor(private service:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next:(response) =>{
        this.products = response;
      }
    })
  }

  onLogout(){
    localStorage.removeItem('myDashboardData');
    this.router.navigate(['login']);
  }
  
  onClick(products:Products){
    this.productlistdata.push(products);

    localStorage.setItem("productlist",JSON.stringify(this.products));
    
  }
}
