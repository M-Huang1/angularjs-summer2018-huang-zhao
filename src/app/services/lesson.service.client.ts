export class LessonServiceClient {
  findLessonsForModule(courseId,moduleId) {
    return fetch('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/'+ courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
