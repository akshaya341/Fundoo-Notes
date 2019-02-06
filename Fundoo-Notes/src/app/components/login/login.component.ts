import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service'
import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router';
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
      "email": this.email,
      "password": this.password
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
      localStorage.setItem('token', this.response.id);

      this.router.navigate(['dashboard']);
    }, err => {
      alert('Something went wrong');
    });
  }

  }

}
