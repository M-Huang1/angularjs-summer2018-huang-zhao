export class CourseServiceClient {
  COURSE_URL = 'https://webdev-zhao-huang-summer2018.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }

  findModulesForCourse(courseId) {
    return fetch
    ('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/'
      + courseId + '/module')
      .then(response => response.json());
  }

}
