import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.js';

import Login from './components/Login.js';
import Registration from './components/Registration.js';
import { UserHomePage } from './components/UserHomePage.js';
import Home from './components/Home.js';
import { ProtectedNavBar } from './components/ProtectedNavBar';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={Home} />
          <Route path='/signin' component={Login} />
          <Route path='/signup' component={Registration} />
          <PrivateRoute path='/protected' component={UserHomePage} />
      </Switch>
    </div>
  );
}

export default App;
