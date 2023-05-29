import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { OrderManagementService } from 'src/app/services/Order-Management/order-management.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css']
})
export class AllListsComponent implements OnInit {

  addresses: Address[] = [];
  id = Number(localStorage.getItem("userId"));
  constructor(private service: OrderManagementService) { }

  ngOnInit(): void {

    this.service.getAddress(this.id).subscribe({
      next:(addressData) =>{
        this.addresses = addressData;
        console.log(addressData);
      }
    })
  }

}
