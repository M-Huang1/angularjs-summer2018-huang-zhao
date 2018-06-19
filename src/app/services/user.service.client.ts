export class UserServiceClient {

  DB_URL= "https://webdev-huang-nodejs-s18.herokuapp.com";


  findUserByUsername(username){
    return fetch(this.DB_URL + '/api/username/' + username)
      .then(response => {
        return response.json()
      });
  }
  findUserById(userId){
    return fetch(this.DB_URL + '/api/user/' + userId)
      .then(response => {
        return response.json()
      });
  }


  updateUser(user){
    return fetch(this.DB_URL + '/api/profile', {
        body: JSON.stringify(user),
        credentials: 'include', // include, same-origin, *omit
        method: 'put',
        headers: {
          'content-type': 'application/json'
        }
      }
    )
  }
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(this.DB_URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response =>
        response.json()
      );
  }

  logout() {
    return fetch(this.DB_URL + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }


  profile() {
    return fetch(this.DB_URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => {
        return response.json();

      });

  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
      role:'student'
    };
    return fetch(this.DB_URL + '/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
