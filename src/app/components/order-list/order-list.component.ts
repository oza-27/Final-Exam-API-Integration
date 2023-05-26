import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe({
      next: (response) =>{
        this.orders = response;
      }
    })
  }

}
