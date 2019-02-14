/************************************************************************************************
* Execution : 1. default node cmd> forgot.ts 
* 
* Purpose :forgot to fundoo
* 
* @file : forgot.ts
* @module : forgot.ts - This is optional if expeclictly its an npm or local package
* @author : Akshaya M I <akshayakumarmi97@gmail.com>
* @since : 31-1-2019
*
*************************************************************************************************/




import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html', 
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  
email=new FormControl('',[Validators.required,Validators.email])
 model: any; 
 message='';
 responce:any;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  
  next(){

    try{
   this.model={
      "email" : this.email.value
    };
  console.log("model",this.model)
    if(this.email.value == '')
    {
      this.message="Field missing ";
    }
  
else{               
    this.httpService.postRequest('user/reset',this.model).subscribe(data =>  {
      console.log(data);
      this.responce=data;
      this.message=this.responce.message;
     // this.router.navigate(['resetpassword']);
    },
    err => {
      alert('Something went wrong');

      })
    }
  }
    catch(err){
    alert('Error occured')
    }
  }
   

  // redirect() {
  //   this.router.navigate(['login']);
  // }
   
}
