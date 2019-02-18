/************************************************************************************************
* Execution : 1. default node cmd> register.ts 
* 
* Purpose : Registration to fundoo
* 
* @file : register.ts
* @module : register.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 28-1-2019
*
*************************************************************************************************/



import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message = '';
  selected: '';
  hide = true;
  model: any;
  responce: any;
  message1='';

  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required])
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirm = new FormControl('', [Validators.required]);
  service = new FormControl('', [Validators.required]);

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  register() {

    try {
      this.model = {
        "firstName": this.firstname.value,
        "lastName": this.lastname.value,
        "phoneNumber": '',
        "imageUrl": '',
        "service": this.service.value,
        "email": this.username.value,
        "confirm": this.confirm.value,
        "cardId": '',
        "password": this.password.value,
      }

      if (this.firstname.value == '' || this.lastname.value == '' || this.username.value == '' || this.password.value == '' || this.confirm.value == '' || this.service.value == '') {
        this.message = "Fields are missing";
        // console.log("Fields are missing");
        return;
      }
      else {

        this.httpService.postRequest('/user/userSignUp', this.model).subscribe(data => {

          this.responce=data;
           this.message1=this.responce.message;
          console.log(data);
          // this.router.navigate(['login']);
        },
          err => {
            alert('Something went wrong ')
          })
      }
    }
    catch (err) {
      this.message="Something bad happened"
    }
     
  }
}
