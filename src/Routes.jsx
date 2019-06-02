import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/pages/NotFoundPage';
import Frontpage from './components/pages/Frontpage';
import Header from './components/organisms/Header';


const Routes = props => {
  return (
    <Router>
      <Header />
  
          <Switch>
        {/* ROUTE Root */}
        <Route exact path={'/'} render={props => <Frontpage />} />

        {/* ROUTE 404 */}
        <Route component={NotFoundPage} />
      </Switch>

    </Router>
  );
};

export default Routes;
