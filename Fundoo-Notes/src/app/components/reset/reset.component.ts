import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  password= new FormControl('',[Validators.required,Validators.maxLength(15)]);
  cpassword=new FormControl('',[Validators.required,Validators.maxLength(15)]);
  hide=true;

 checkPassword(group:FormGroup)
 {
   let pass=group.controls.password.value;
   let cpass=group.controls.cpassword.value;
   return pass === cpass ? null : { notSame: true }
 }

  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
  }
  
  save(){
    this.router.navigate(['login']);
  }
}
