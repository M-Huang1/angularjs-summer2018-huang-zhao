export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch
    ('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findModulesForCourse(courseId) {
    return fetch
    ('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/'
      + courseId + '/module')
      .then(response => response.json());
  }


}
