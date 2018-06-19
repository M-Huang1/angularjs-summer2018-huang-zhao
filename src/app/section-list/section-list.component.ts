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

  }

  sectionName = '';
  seats = '';
  role='';
  courseId = '';
  enrolledSection = undefined;
  enrolledId = undefined;
  sections = [];
  userId = '';
  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.userId = user._id;
        this.role = user.role;
        this.route.params.subscribe(params => {
          this.courseId = params['courseId'];
          this.loadSections(params['courseId']);
        })

      });


  }

  deleteSection(sectionId){
    if(this.role=='admin'){
      this.sectionService.deleteSectionById(sectionId).then(() =>{
        this.sections = this.sections.filter(section => section._id != sectionId);

      })
    }
  }
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .sectionService
      .findSectionsForCourse(courseId)
      .then(sections =>
      {
        this.sections = sections;
        this.getEnrolledSections()});
  }

  getEnrolledSections() {
    this.enrollmentService.findSectionsForStudent(this.userId).then(
      (enrollments) => {
        this.enrolledSection = undefined;
        this.enrolledId = undefined;
        enrollments.map((enrollment) => {
          this.sections.map((section) => {
            if (enrollment.section._id == section._id) {
              this.enrolledSection = section;
              this.enrolledId = section._id;
            }
          })
        })
      })
  }




  createSection(sectionName, seats) {
    if(sectionName =='' || seats == ''){
      alert('Both Fields Must not be Empty')
    }
    else if(isNaN(Number(seats))){
      alert('Seats Must be A Number')
    }
    else if(Number(seats) <= 0){
      alert('Seats Must Be Greater than Zero')
    }
    else {
      this
        .sectionService
        .createSection(this.courseId, sectionName, seats)
        .then(() => {
          this.loadSections(this.courseId);
        });
    }
  }

  enroll(section) {
    // alert(section._id);
    if (this.userId != '') {
      this.enrollmentService
        .enrollStudentInSection(section._id, this.userId)
        .then((response) => {
          this.router.navigate(['profile']);
        });
    }
  }

  unroll(section){
    this.enrollmentService.deleteEnrollment(this.enrolledId,this.userId).then(() =>{
      this.loadSections(this.courseId);
    })
  }


}
