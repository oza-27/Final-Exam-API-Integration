import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from '../helpers/validateall';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.modle';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  signupForm!: FormGroup;
  register: User[] = [];
  constructor(private fb: FormBuilder, private service:AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: [null, Validators.required],
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  // hiding or showing password
  hideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    debugger
    if (this.signupForm.valid) {
      debugger
      this.service.registration(this.signupForm.value).subscribe({
        next: (response) =>{
          console.log(response);
        }
      })
    }
  }
}
