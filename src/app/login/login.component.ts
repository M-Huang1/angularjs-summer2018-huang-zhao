import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  tried = false;
  mismatch = false;
  login(username, password) {
    this.tried = true;
    if(username.length < 1){
      alert('Missing Username Field')
    }
    else if(password.length < 1){
      alert('Missing Password Field')
    }
    else {
      this.service
        .login(username, password)
        .then((response) => {
          if(response == null){
            this.mismatch = true;
            alert('Invalid Username and Password Combination');
          }
          else {
            this.router.navigate(['profile']);
          }
        });
    }
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
