import React, { Component } from 'react';

import AuthService from '../../AuthService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onLogin = this.onLogin.bind(this);
    this.onCreate = this.onCreate.bind(this);
    // this.onLogout = this.onLogout.bind(this);

    let API_URL = process.env.REACT_APP_API_URL;
    this.Auth = new AuthService(`${API_URL}users/authenticate`);
  }
  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  componentDidMount() {
    console.log('Login component mounted');

    // TODO: Move this to a Login component
    this.Auth.loggedIn()
      ? this.setState({
          isLoggedIn: true,
        })
      : this.setState({
          isLoggedIn: false,
        });
  }

  onLogin() {
    this.Auth.login(this.state.username, this.state.password)
      .then(response => {
        console.log('Authentication:', response.msg);
        this.getData();
      })
      .catch(error => {
        // TODO: Inform the user about the error
        console.error('Error authenticating:', error);
      });
  }

  createUser(username, password) {
    let newUser = {
      username: username,
      password: password,
    };
    const URL = process.env.REACT_APP_API_USERS;
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error when adding user: ', error);
      });
  }

  onCreate(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.createUser(username, password);
  }

  render() {
    return (
      <div className="flex justify-center rounded p-8">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="block w-full text-center text-grey-darkest text-xl mb-6">
              Login
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.onLogin}
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.onCreate}
              >
                Create User
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2019 Frank - All rights waived.
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
