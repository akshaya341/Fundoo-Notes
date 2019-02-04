import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
 import { HttpService } from '../service/http.service'
 import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  password: string;
  response: any;
  model = {};

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
   constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  login() {
   console.log(this.model);
   
    this.httpService.postRequest('user/login', this.model).subscribe(data => {
     
      //var result  = {};
    
      console.log("data",data);
      this.response = data;
      localStorage.setItem('token',this.response.id);
     
      this.router.navigate(['dashboard']);
    }, err => {
      alert('Something went wrong');
    })
  }



}
