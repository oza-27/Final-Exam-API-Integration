import { Component, OnInit } from '@angular/core';
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
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next:(response) =>{
        this.products = response;
      }
    })
  }

  

}
