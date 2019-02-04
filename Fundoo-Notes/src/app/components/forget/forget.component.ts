import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html', 
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  
//email=new FormControl('',[Validators.required,Validators.email])
  email=String;
  
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  
  

 model={};
  next(){
    this.httpService.postRequest('user/reset',this.model).subscribe(data =>  {
      console.log(data);
      this.router.navigate(['resetpassword']);
    },
    err => {
      alert('Something went wrong');

      })
    
  }
   
  redirect() {
    this.router.navigate(['login']);
  }
   
}
