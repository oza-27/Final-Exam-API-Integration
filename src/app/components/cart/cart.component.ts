import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders.model';
import { Products } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Products[] = [];
  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (productData) => {
        this.products = productData;
        console.log(productData)
      }
    })
  }
  onDelete(){
    
  }
}
