import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {serializePath} from '@angular/router/src/url_tree';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    if(username === undefined || username.length < 1 ||
      password === undefined || password.length < 1 ||
    password != password2){
      alert("One or more fields needs to be fixed (Follow the instructions in red)")
    }
    else {
      this.service.findUserByUsername(username).then((response) => {
        if (response === null) {
          this.service
            .createUser(username, password)
            .then(() =>
              this.router.navigate(['profile']));
        }
        else {
          alert("This Username has been taken already!")

        }
      })
    }
  }

  ngOnInit() {
  }
}
