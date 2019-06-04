import React, { Component } from 'react';
import './css/document.css';

import Fullpage from './components/templates/Fullpage';
import Routes from './Routes';

class App extends Component {
  API_URL = process.env.REACT_APP_API_URL;
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Fullpage>
        <Routes />
      </Fullpage>
    );
  }
}

export default App;
