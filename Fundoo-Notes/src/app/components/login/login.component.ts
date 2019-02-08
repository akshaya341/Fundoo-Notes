/************************************************************************************************
* Execution : 1. default node cmd> login.ts 
* 
* Purpose : Login to fundoo
* 
* @file : login.ts
* @module : login.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 27-1-2019
*
*************************************************************************************************/


import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service'
import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any;
  response: any;
  message='';

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);


  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
 
 
  login() {
    
      this.model = {
      "email": this.email.value,
      "password": this.password.value
    };

    if(this.email.value== '' || this.password.value== ''){
      this.message="Field cannot be empty";
    }
else{
    this.httpService.postRequest('user/login', this.model).subscribe(data => {
      console.log(this.model);
      //var result  = {};

      console.log("data", data);
      this.response = data;
      localStorage.setItem('token', this.response.userId);
      var token=localStorage.getItem('token');
      console.log("token id ",token );

    if(token != this.response.userId){
      this.message="User not found";
      return;
    }
    // else if(this.password.value != this.response.password){
    //   this.message="Incorrect Password";
    //   return;
    // }

   else{
    
     this.router.navigate(['dashboard']);
   }

    
    }, err => {
      this.message="User not found";
      alert('Something went wrong');
    });
  }

  }

}
