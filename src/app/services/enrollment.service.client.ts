export class EnrollmentServiceClient {

  ENROLLMENT_URL = 'https://webdev-huang-nodejs-s18.herokuapp.com/api/student/STUDENTID/section';


  enrollStudentInSection(sectionId, studentId) {
    const url = this.ENROLLMENT_URL.replace('STUDENTID', studentId) + '/' + sectionId +'/enroll';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForStudent(studentId) {
    const url = this.ENROLLMENT_URL.replace('STUDENTID', studentId);
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  deleteEnrollment(sectionId, studentId) {
    const url = this.ENROLLMENT_URL.replace('STUDENTID', studentId) + '/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
