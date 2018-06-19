import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private userService: UserServiceClient,) {
  }

  courses: Course[] = [];
  userId='';
  role="";
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
        }
      })
  }
}

