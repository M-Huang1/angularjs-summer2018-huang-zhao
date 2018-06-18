import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/CourseNavigatorService Client';
@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];
  modules = [];
  selectedCourseId = 0;

  constructor(private service: CourseNavigatorServiceClient) {
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

