//Protected page This is a dummy protected page for now that will render a list of student, 
//have an add student button, and also have a nav bar
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';

import React from 'react';
import { ProtectedNavBar } from './ProtectedNavBar';
import { StudentsTable } from './StudentsTable/StudentsTable';
import Pagination from './Pagination.js';

export const UserHomePage = () => {

  return (
    <section className="home-page">
      <ProtectedNavBar />
      <div className="container home-page-content">
        <div className="home-page-search">
          <input type="text" placeholder="Search student" name='query'/>
        </div>

        <div className="student-list">
          <StudentsTable />
        </div>

        <Pagination />
      </div>
    </section>
  )
}