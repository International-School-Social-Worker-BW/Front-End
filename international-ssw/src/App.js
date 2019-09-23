import React from 'react';
import './App.scss';

import { BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Login />
    </div>
  );
}

export default App;
