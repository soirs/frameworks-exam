import React, { Component } from 'react';
import './css/document.css';

import Fullpage from './components/templates/Fullpage';
// import Routes from './Routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/pages/NotFoundPage';
import Frontpage from './components/pages/Frontpage';
import Header from './components/organisms/Header';
import NewListing from './components/pages/NewListing';
import Login from './components/pages/Login';
import LocationPage from './components/pages/LocationPage';
import JobsInLocation from './components/pages/JobsInLocation';
import SingleJob from './components/pages/SingleJob';
import ShowAll from './components/pages/ShowAll';

class App extends Component {
  API_URL = process.env.REACT_APP_API_URL;
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      jobs: [],
    };
  }

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs() {
    const URL = process.env.REACT_APP_API_JOBS;
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ jobs: data });
      })
      .catch(error => {
        console.error('Error when fetching jobs: ', error);
      });
  }

  updateLoginState() {
    this.setState({
      isLoggedIn: true,
    });
  }

  render(props) {
    return (
      <Fullpage>
        <Router>
          <Header loginStatus={this.state.isLoggedIn} />
          <Switch>
            {/* ROUTE Root */}
            <Route exact path={'/'} render={props => <Frontpage />} />
            {/* ROUTE NewListing */}
            <Route
              exact
              path={'/newlisting'}
              render={props => <NewListing />}
            />
            {/* ROUTE Login */}
            <Route
              exact
              path={'/login'}
              render={props => (
                <Login updateLoginState={this.updateLoginState} />
              )}
            />

            {/* ROUTE Jobs/:category */}
            <Route
              exact
              path={'/jobs/:category'}
              render={props => <LocationPage {...props} />}
            />
            {/* ROUTE Jobs/:location */}
            <Route
              exact
              path={'/jobs/:category/:location'}
              render={props => (
                <JobsInLocation {...props} jobs={this.state.jobs} />
              )}
            />
            {/* ROUTE by id */}
            <Route
              path={'/jobs/:category/:location/:id'}
              render={props => <SingleJob jobs={this.state.jobs} {...props} />}
            />

            {/* ROUTE show-all */}
            <Route
              path={'/show-all'}
              render={props => <ShowAll jobs={this.state.jobs} {...props} />}
            />

            {/* ROUTE 404 */}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Fullpage>
    );
  }
}

export default App;
