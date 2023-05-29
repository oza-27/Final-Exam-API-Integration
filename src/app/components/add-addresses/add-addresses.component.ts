import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import validateForm from '../helpers/validateall';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderManagementService } from 'src/app/services/Order-Management/order-management.service';

@Component({
  selector: 'app-add-addresses',
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.css']
})
export class AddAddressesComponent implements OnInit {
  addressForm:FormGroup;
  submitting: boolean = false;
  constructor(private fb:FormBuilder, private service:OrderManagementService, private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {

    this.addressForm = this.fb.group({
      addressType:['', Validators.required],
      contactPerson:['', Validators.required],
      shippingAddress:['', Validators.required],
      country:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      zipCode:['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })
  }

  onSubmit(){
    debugger
    if(this.addressForm.invalid){
      
      this.service.addAddress(this.addressForm.value).subscribe({
        next:(response) =>{          
          console.log(response)
          this.router.navigate(['cart']);
          this.toastr.success("Address Added Successfully")
        }, error:(err) =>{
          this.toastr.error("Something went worng:/")
          this.router.navigate(['add-address'])
        }
      })

    }
  }

  get getAllValidations() {
    return this.addressForm.controls
  }

}
