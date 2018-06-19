export class UserServiceClient {


  findUserByUsername(username){
    return fetch('http://localhost:4000/api/username/' + username)
      .then(response => {
        return response.json()
      });
  }
  findUserById(userId){
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => {
        return response.json()
      });
  }


  updateUser(user){
    return fetch('http://localhost:4000/api/profile', {
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
    return fetch('http://localhost:4000/api/login', {
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
    return fetch('http://localhost:4000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
      role:'student'
    };
    return fetch('http://localhost:4000/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
