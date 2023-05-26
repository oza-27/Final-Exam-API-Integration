import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.css']
})
export class AllListsComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private service: AuthService) { }

  ngOnInit(): void {

    this.service.getAddress().subscribe({
      next:(addressData) =>{
        this.addresses = addressData;
        console.log(addressData);
      }
    })
  }

}
