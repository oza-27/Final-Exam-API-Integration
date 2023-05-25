import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import validateForm from '../helpers/validateall';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-addresses',
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.css']
})
export class AddAddressesComponent implements OnInit {
  addressForm:FormGroup;
  constructor(private fb:FormBuilder, private service:AuthService, private router:Router) { }

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
      debugger
      this.service.addAddress(this.addressForm.value).subscribe({
        next:(response) =>{
          debugger
          console.log(response)
          this.router.navigate(['all-lists']);
        }, error:(err) =>{
          alert("something went wrong:/")
        }
      })

    }
    else{
      validateForm.validateAllForm(this.addressForm);
    }
  }
}
