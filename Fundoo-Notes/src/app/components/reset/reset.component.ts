/************************************************************************************************
* Execution : 1. default node cmd> reset.ts 
* 
* Purpose : Reset to fundoo
* 
* @file : reset.ts
* @module : reset.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 1-2-2019
*
*************************************************************************************************/


import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
//import { create } from 'domain';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  password= new FormControl('',[Validators.required,Validators.maxLength(15)]);
  cpassword=new FormControl('',[Validators.required,Validators.maxLength(15)]);
  hide=true;
   message='';
   model:any;
   responce:any;
  localStorage: any;
  mytoken: any;
 
   


//  checkPassword(group:FormGroup)
//  {
//    let pass=group.controls.password.value;
//    let cpass=group.controls.cpassword.value;
//    return pass === cpass ? null : { notSame: true }
//  }

  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
  }
  update(){
    var payload=new FormData;
    var mytoken=localStorage.getItem('token');
    console.log("my token",mytoken);
    
    if(this.password.value ==''|| this.cpassword.value=='')
    {
      this.message=" you must fill both Fields "
    }
    else if(this.password.value !== this.cpassword.value){
     this.message="password doesn't match"
    }
    else 
   // if(this.password.value === this.cpassword.value)
    {
     
     // console.log("mytoken.value: ",mytoken)
      this.model=
      {
        "newPassword":payload.append('newPassword',this.cpassword.value),
        "token" : payload.append('token',mytoken)
      }
      //console.log("mytoken.value: ",this.mytoken.value)

      this.httpService.postRequest('user/reset-password',this.model).subscribe(data =>{
        console.log("data at 75-----",data);
         
      },
      err =>{
       alert('Something went wrong ');
      }) 
     //this.message="Your password is updated "
      }
    }
    //this.router.navigate(['login']);
  }

