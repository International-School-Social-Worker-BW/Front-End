import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.js';

// import Login from './components/Login.js';
// import Registration from './components/Registration.js';
import UserHomePage from './components/UserHomePage.js';
import Home from './components/Home.js';
import RoleSelect from './components/RoleSelect.js';

function App() {
  return (
    <div className="App">
      
      <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/protected' component={UserHomePage} />
          <PrivateRoute path='/role' component={RoleSelect} />

      </Switch>
    
      
    </div>
  );
}

export default App;
