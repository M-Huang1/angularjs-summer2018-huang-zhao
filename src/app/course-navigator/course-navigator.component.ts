import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {CourseServiceClient} from '../services/course.service.client';
@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];
  modules = [];
  selectedCourseId = 0;

  constructor(private service: CourseServiceClient) {
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }
  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then(modules =>
        this.modules = modules);  }
}

