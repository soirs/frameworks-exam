import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/pages/NotFoundPage';
import Frontpage from './components/pages/Frontpage';
import Header from './components/organisms/Header';
import NewListing from './components/pages/NewListing';
import Login from './components/pages/Login';
import CategoryPage from './components/pages/CategoryPage';
import LocationPage from './components/pages/LocationPage';

const Routes = props => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* ROUTE Root */}
        <Route exact path={'/'} render={props => <Frontpage />} />
        {/* ROUTE NewListing */}
        <Route exact path={'/NewListing'} render={props => <NewListing />} />
        {/* ROUTE Login */}
        <Route exact path={'/Login'} render={props => <Login />} />
        {/* ROUTE Jobs/:category */}
        <Route
          exact
          path={'/Jobs/:category'}
          {...props}

          render={props => <CategoryPage />}
        />
        {/* ROUTE Jobs/:location */}
        <Route
          exact
          path={'/Jobs/:category/:location'}
          {...props}
          render={props => <LocationPage parent={props.match.params.url}/>}
        />
        {/* ROUTE 404 */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
