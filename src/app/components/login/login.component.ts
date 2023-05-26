import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from '../helpers/validateall';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm!: FormGroup;
  username: string = "";
  password: string = "";
  constructor(public fb: FormBuilder, private service:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: [null, Validators.required]
    })
  }
  onSubmit(value:any) {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe({
        next:(response) =>{
          localStorage.setItem("myDashboardData", JSON.stringify(value));
          sessionStorage.setItem("myDashboardData", JSON.stringify(value));
          console.log(response);
          this.router.navigate(['dashboard']);
          this.toastr.success("Login succesfully:");
        }, error:(err) =>{
          this.toastr.error("Something went wrong:/");
        }
      })
    }
    else {
      // error using toastr and with required fields...
      validateForm.validateAllForm(this.loginForm);
    }
  }
  // hiding or showing password
  hideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
