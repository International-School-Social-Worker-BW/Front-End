import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.js';

// import Login from './components/Login.js';
// import Registration from './components/Registration.js';
import UserHomePage from './components/UserHomePage.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/protected' component={UserHomePage} />
      </Switch>
    
      
    </div>
  );
}

export default App;
