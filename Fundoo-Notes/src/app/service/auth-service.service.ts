import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private loginUrl= "http://34.213.106.173/api/user_adminLogin"
  constructor( private http : HttpClient) { }
  loginUser(user){
    return this.http.post(this.loginUrl,user);
  } 

  loggedIn (){
    return !!localStorage.getItem('admintoken');
  }
}
