import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean;
  errors:boolean;

  loginForm:FormGroup;


  constructor(private blogService:BlogService,private router:Router,private formBuilder: FormBuilder) {

   this.loginForm=this.formBuilder.group({
      email:'',
      password:''
   });

  }

  ngOnInit(): void {

  }

  login() {
    this.loading = true;
    this.errors = false;
    this.blogService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe((res: any) => {
        console.log(res.access_token);
        // Store the access token in the localstorage
        localStorage.setItem('access_token', res.access_token);
        this.loading = false;
        // Navigate to home page
        this.router.navigate(['home']);
      }, (err: any) => {
        // This error can be internal or invalid credentials
        // You need to customize this based on the error.status code
        this.loading = false;
        this.errors = true;
      });
  }
}
