import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  submitting:boolean=false;
  addOrderForm:FormGroup;

  constructor(private fb:FormBuilder, private toastr:ToastrService, private service:AuthService,
    private router:Router) { }

  ngOnInit(): void {

    this.addOrderForm = this.fb.group({
      customerName:[null, Validators.required],
      customerContactNumber:[null, Validators.required],
      orderDate:[null, Validators.required],
      createdOn:[null, Validators.required],
      totalAmount:[null, Validators.required],
      updateOn:[null, Validators.required],
      isActive:[null, Validators.required],
      note:[null, Validators.required]
    })
  }
  onAddOrder(){
    this.submitting = true;
    if(this.addOrderForm.invalid){
      this.toastr.error("Something Went wrong:/");
    }
    else{
      this.service.createOrder(this.addOrderForm.value).subscribe({
        next:(response) =>{
          console.log(response);
          this.router.navigate(['cart'])
        },error:(err) =>{
          this.toastr.error("Order has not been added:/")
        }
      })
    }
  }

  get getAllValidations(){
    return this.addOrderForm.controls
  }
}
