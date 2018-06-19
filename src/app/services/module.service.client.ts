export class ModuleServiceClient {
  MODULE_URL = 'https://webdev-zhao-huang-summer2018.herokuapp.com/api/course/COURSE_ID/module';
  MODULEBYID_URL = 'https://webdev-zhao-huang-summer2018.herokuapp.com/api/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }

  findModuleById(moduleId) {
    return fetch(this.MODULEBYID_URL + '/' + moduleId)
      .then(response => response.json());
  }
}
