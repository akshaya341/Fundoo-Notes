import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://34.213.106.173/api/"
  static postRequest: any;
  constructor(private http: HttpClient) { }

  postRequest(url, data) {
    console.log("Datasssss");
    
    console.log(data);
    
    return this.http.post(this.baseUrl + url, data);
  }

  getRequest(url,data){
    console.log("get request");
    console.log(data);

    return this.http.get(this.baseUrl+url,data);
  }
}
