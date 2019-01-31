import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  firstName:String;
  lasttName:String;
  userName:String;
  password:String;


  hide: true;
 constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

}
