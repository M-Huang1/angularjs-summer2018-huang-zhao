export class EnrollmentServiceClient {

  ENROLLMENT_URL = 'http://localhost:4000/api/student/STUDENTID/section';


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
