import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute.js';
import UserHomePage  from './components/UserHomePage.js';
import Home from './components/Home.js';
import AddStudent from './components/AddStudent.js';
import RoleSelect from './components/RoleSelect.js';
import LoginPage from './components/LoginPage.js';
import RegistrationPage from './components/RegistrationPage.js';
import StudentComponent from './components/StudentComponent.js';
import StudentListComponent from './components/StudentListComponent.js';
import EditStudent from './components/EditStudent.js';


function App() {
  
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={Home} />
          <Route path='/add' component={AddStudent} />
          <Route path='/student/:id/edit' component={EditStudent}/>
          <Route path='/student/:id' component={({match})=>(<StudentComponent match={match}/>)} />
          <Route path='/signin' component={LoginPage} /> 
          <Route path='/signup' component={RegistrationPage} /> 
          <PrivateRoute path='/protected' component={UserHomePage} />
          {/* <PrivateRoute path='/protected' component={({match})=>(<StudentListComponent match={match}/>)} /> */}
          <PrivateRoute path='/role' component={RoleSelect} />

      </Switch>
    </div>
  );
}

export default App;
