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
import StudentPage from './components/StudentPage.js';
import { fetchStudents } from './store/actions';


function App() {
  const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   fetchStudents()
        
  // })
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={Home} />
          <Route path='/add' component={AddStudent} />
          <Route path='/students/:id' render={props => <StudentPage {...props} students={students}/>} />
          <Route path='/signin' component={LoginPage} /> {/* this needs to have a page built to render the Login component */}
          <Route path='/signup' component={RegistrationPage} /> {/* this needs to have a page built to render the Registration component */}
          <PrivateRoute path='/protected' component={UserHomePage} />
          <PrivateRoute path='/role' component={RoleSelect} />

      </Switch>
    </div>
  );
}

export default App;
