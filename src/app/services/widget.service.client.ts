export class WidgetServiceClient {
  findWidgetsForLesson(courseId, moduleId,lessonId) {
    return fetch('https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/'
      + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
