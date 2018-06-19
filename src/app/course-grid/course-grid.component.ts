import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,
              private enrollmentService: EnrollmentServiceClient) {
  }

  courses: Course[] = [];
  userId='';
  role="";
  coursesEnrolledIn=[];
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
        courses.map((course) =>
        {
          course.created = new Date(course.created).toLocaleString()
        }
        )

      });

    this.userService
      .profile()
      .then(user => {
        if (user._id != null && user._id != undefined) {
          this.userId = user._id;
          this.role=user.role;
          this.getEnrolledSections();
        }
      })
  }

  getEnrolledSections() {
    this.enrollmentService.findSectionsForStudent(this.userId).then(
      (enrollments) => {
        this.coursesEnrolledIn = [];
        enrollments.map((enrollment) => {
          this.coursesEnrolledIn.push(enrollment.section.courseId)
          })
        })
  }
}

