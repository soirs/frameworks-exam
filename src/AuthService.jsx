/**
 * Service class for authenticating users against an API
 * and storing JSON Web Tokens in the browsers LocalStorage.
 */
class AuthService {
  constructor(auth_api_url) {
    this.auth_api_url = auth_api_url;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
  }

  login(username, password) {
    // Calls function in bottom
    return this.fetch(this.auth_api_url, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(res => {
      this.setToken(res.token);
      return Promise.resolve(res);
    });
  }

  loggedIn() {
    // TODO: Check if token is expired using 'jwt-decode'
    // TODO: npm install jwt-decode
    /*
        if (jwtDecode(token).exp < Date.now() / 1000) {
            // Do something
        }
         */

    let isLoggedIn = true;

    // Checks value of token
    // Should be a catch all for all null, undefined or "" values
    if (this.getToken() == null);

    return isLoggedIn;
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  fetch(url, options) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    }).then(response => {
      response.json();
    });
  }
}

export default AuthService;
