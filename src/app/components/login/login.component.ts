import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from '../helpers/validateall';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderManagementService } from 'src/app/services/Order-Management/order-management.service';
import { AuthService } from 'src/app/services/Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  submitted:boolean=false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm!: FormGroup;
  username: string = "";
  password: string = "";
  constructor(public fb: FormBuilder, private service:AuthService, private router:Router, 
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email]],
      password: [null, Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.service.login(this.loginForm.value).subscribe({
        next: (response) => {
          if(response){
              this.toastr.success("Login Successfully");
              this.service.registeredUsers.next(response.data.email);
              localStorage.setItem("userData", response.data.email);
              localStorage.setItem("userId", response.data.userId);
              this.router.navigate(['/dashboard']);
          }
        }, error: (err) => {
          console.log(err);
        }
      })
    }
  }
  // hiding or showing password
  hideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
