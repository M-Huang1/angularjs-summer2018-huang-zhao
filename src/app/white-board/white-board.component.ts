import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private router: Router) {}


  userId="";
  username;

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
        if (user._id != null && user._id != undefined) {
          this.userId = user._id;
        }
      })
  }

}
