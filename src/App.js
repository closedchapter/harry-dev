import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import usePageTracking from './usePageTracking.js'

import Landing from './pages/dashboard'

import Upcoming from './pages/upcoming'

import Error from './pages/error'

const App = () => {

  usePageTracking();

  return (
    <div className="App">
      <Switch>
        
        <Route path="/" exact component={ Landing } /> 

        <Route path="/upcoming" exact component={ Upcoming } />

        <Route path="/404" component={ Error } />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;