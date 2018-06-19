import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  userId = -1;
  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        console.log(user.id);
        this.userId = user.id;
      })
  }


  loadSections(courseId) {
    this.courseId = courseId;
    this
      .sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .sectionService
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    // alert(section._id);
    if (this.userId != -1) {
      this.enrollmentService
        .enrollStudentInSection(section._id, this.userId)
        .then((response) => {
          this.router.navigate(['profile']);
        });
    }
  }



}
