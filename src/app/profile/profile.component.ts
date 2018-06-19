import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private router: Router) { }

  user = {};
  userId="";
  username;
  firstName;
  lastName;
  password;
  sections = [];

  update() {
    const user= {
      firstName: this.firstName,
      lastName: this.lastName,
    };

    this.service.updateUser(user).then(()=>{
      this.service.findUserById(this.userId)
        .then((user) =>{

          this.firstName = user.firstName;
          if(this.firstName == undefined || this.firstName == null){
            this.firstName = '';
          }
          this.lastName = user.lastName;
          if(this.lastName == undefined || this.lastName== null){
            this.lastName = '';
          }
        });
    })

  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.username = user.username;
        if(user._id != null && user._id != undefined) {
          this.userId = user._id;
          this.service.findUserById(this.userId)
            .then((user) => {

              this.firstName = user.firstName;
              if (this.firstName == undefined || this.firstName == null) {
                this.firstName = '';
              }
              this.lastName = user.lastName;
              if (this.lastName == undefined || this.lastName == null) {
                this.lastName = '';
              }
            });
        }
      });
    this.enrollmentService
      .findSectionsForStudent(this.userId)
      .then(sections => this.sections = sections );
  }

}
