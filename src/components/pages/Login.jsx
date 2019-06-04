import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="flex justify-center rounded p-8">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="block w-full text-center text-grey-darkest text-xl mb-6">
              Login
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2019 Frank -- All rights reversed.
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
