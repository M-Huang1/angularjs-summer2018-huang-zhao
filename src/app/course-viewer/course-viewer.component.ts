import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {ModuleServiceClient} from '../services/module.service.client';
import {LessonServiceClient} from '../services/lesson.service.client';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId = undefined;
  moduleId = undefined;
  lessonId = undefined;
  //course: Course = new Course();
  course = undefined;
  modules=[];
  lessons=[];
  widgets=[];
  constructor(private service: CourseServiceClient,
              private moduleService: ModuleServiceClient,
              private lessonService: LessonServiceClient,
              private widgetService: WidgetServiceClient,
              private route: ActivatedRoute) {

  }


  loadCourse(courseId) {
    this.service.findCourseById(courseId)
      .then(course =>
      {
        this.course = course;
        this.modules=[];
        this.lessons=[];
        this.widgets=[];
        this.moduleId = undefined;
        this.lessonId = undefined;
      });
  }

  selectModule(moduleId){
    this.lessons=[];
    this.widgets=[];
    this.lessonId = undefined;
    this.moduleId = moduleId;
    this.lessonService.findLessonsForModule(this.courseId,this.moduleId).then((lessons) =>
      {this.lessons = lessons;}
    )


  }

  selectLesson(lessonId){
    this.widgets=[];
    this.lessonId = lessonId;
    this.widgetService.findWidgetsForLesson(this.courseId,this.moduleId,this.lessonId).then((widgets) =>
    {
      console.log(widgets);
      this.widgets = widgets;
    })
  }
  ngOnInit() {
    this.route.params.subscribe(params =>
    {
      this.courseId = params['courseId'];
      this.loadCourse(this.courseId);
    });


    this.moduleService.findModulesForCourse(this.courseId).then(
      (modules) =>{
        this.modules = modules;
      }

    )


  }

}
