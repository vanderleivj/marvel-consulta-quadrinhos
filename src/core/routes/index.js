import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../../features/Dashboard/pages/dashboard';
import { Favorites } from '../../features/Favorites/pages/favorites';


class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    );
  }
  }
  
  export default Routes;

