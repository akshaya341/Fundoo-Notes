import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
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
          console.log(data);
          this.router.navigate(['']);
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
