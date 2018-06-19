export class SectionServiceClient {

  SECTION_URL = 'https://webdev-huang-nodejs-s18.herokuapp.com/api/course/COURSEID/section';
  CRUD_URL = 'https://webdev-huang-nodejs-s18.herokuapp.com/api/section/SECTIONID';



  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  findSectionById(sectionId){
    return fetch(this.CRUD_URL.replace('SECTIONID', sectionId))
      .then(response => response.json());
  }

  updateSectionById(sectionId, section){
    return fetch(this.CRUD_URL.replace('SECTIONID', sectionId),
      {
        method:'post',
        body: JSON.stringify(section),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      });
  }

  deleteSectionById(sectionId){
    return fetch(this.CRUD_URL.replace('SECTIONID', sectionId),
      {
        method:'delete',
        credentials: 'include'
      });
  }

  createSection(courseId, name, seats) {
    const currentSeats = seats;
    const maxSeats = seats;
    const section = {courseId, name, seats, currentSeats, maxSeats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
