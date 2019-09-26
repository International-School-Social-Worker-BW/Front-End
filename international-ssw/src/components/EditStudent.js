import {NavLink} from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import ProtectedNavBar from './ProtectedNavBar.js';

export default function EditStudent (props) {
    const editingState = {
        studentid: null,
        studentfirstname: "",
        studentlastname: "",
        age: null,
        grade: null,
        status: "",
        birthcertificate: true,
        insurance: true,
        specialneeds: false,
        contactname: "",
        relationship: "",
        contactphone: "",
        contactemail: "",
        backgroundinfo: "",
        criticalinfo: ""
    }

    const [editStudent, setEditStudent] = useState(editingState)
    

    const handleChange = e => {
        setEditStudent({...editStudent, [e.target.name]: e.target.value})
    }

  

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/students/student/${props.match.params.studentid}`, editStudent)
        .then(res => {
            setEditStudent(editingState)
            props.history.push(`/protected`)
        })
        .catch(err => console.log(err))
    }
    console.log(editStudent)
    return (
        <section className="edit-student-page">
           <ProtectedNavBar />
            
          <div className="container edit-student-content">
            <div className="edit-header">
              <h1>Update Student</h1>
            </div>

            <form className="edit-form" onSubmit={handleSubmit} >
                <div className="input-container">
                  <div className="input-1-2">
                    <label>First Name</label>
                    <input 
                    type="text" 
                    name="studentfirstname" 
                    onChange={handleChange} 
                    value={editStudent.studentfirstname} required />
                  </div>
                  
                  <div className="input-1-2">
                    <label>Last Name</label>
                    <input 
                    type="text" 
                    name="studentlastname" 
                    onChange={handleChange} 
                    value={editStudent.studentlastname} required />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-1-2">
                    <label>Age</label>
                    <input 
                    type="text" 
                    name="age" 
                    onChange={handleChange} 
                    value={editStudent.age} required />
                  </div>
                  
                  <div className="input-1-2">
                    <label>Grade</label>
                    <input 
                    type="text" 
                    name="grade" 
                    onChange={handleChange}
                    value={editStudent.grade} required />
                  </div>
                </div>

                <div className="input-container top-bar">
                  <div className="input-1">
                    <label className="select-label">Student Status:</label>
                    <select
                      className="input-select"
                      value={editStudent.status}
                      onChange={handleChange}
                      name="status"
                      required                
                    >
                        <option value="Current Student">Current Student</option>                    
                        <option value="Past Student">Past Student</option>
                        <option value="Visiting">Visiting</option>
                    </select>
                  </div>
                </div>
                  
                <div className="input-container">
                  <div className="input-1">
                    <label className="select-label">Birth Certificate?</label>
                    <select
                      className="input-select"
                      value={editStudent.birthcertificate}
                      onChange={handleChange}
                      name="birthcertificate" 
                      required               
                    >
                        <option value="true">Yes</option>                    
                        <option value="false">No</option>
                    </select>
                  </div>
                </div>
                  
                <div className="input-container">
                  <div className="input-1">
                    <label className="select-label">Insurance?</label>
                    <select
                      className="input-select"
                      value={editStudent.insurance}
                      onChange={handleChange}
                      name="insurance" 
                      required               
                    >
                        <option value="true">Yes</option>                    
                        <option value="false">No</option>
                    </select>
                  </div>
                </div>
                  

                <div className="input-container">
                  <div className="input-1">
                    <label className="select-label">Special needs?</label>
                    <select
                      className="input-select"
                      value={editStudent.specialneeds}
                      onChange={handleChange}
                      name="specialneeds" 
                      required               
                    >
                        <option value="true">Yes</option>                    
                        <option value="false">No</option>
                    </select>
                  </div>
                </div>

                <div className="input-container top-bar">
                  <div className="input-1-2">
                    <label>Contact Name</label>
                    <input 
                    type="text" 
                    name="contactname" 
                    onChange={handleChange} 
                    value={editStudent.contactname} required />
                  </div>
                  <div className="input-1-2">
                    <label>Contact Email</label>
                    <input 
                    type="email" 
                    name="contactemail" 
                    onChange={handleChange}
                    value={editStudent.contactemail} required />
                  </div>
                  
                </div>

                <div className="input-container">
                  <div className="input-1-2">
                    <label>Contact Phone</label>
                    <input 
                    type="text" 
                    name="contactphone" 
                    onChange={handleChange} 
                    value={editStudent.contactphone} required />
                    
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-1">
                    <label className="select-label">Relationship:</label>
                    <select
                      className="input-select"
                        value={editStudent.relationship}
                        onChange={handleChange}
                        name="relationship"
                        required                
                    >
                        <option value="mother">Mother</option>                    
                        <option value="father">Father</option>
                        <option value="guardian">Guardian</option>
                        <option value="grandparent">Gradparent</option>
                        <option value="other relation">Other Relation</option>
                    
                    </select>
                  </div>
                </div>

                <div className="input-container top-bar">
                  <div className="input-1">
                    <label>Background Info</label>
                    <textarea 
                    name="backgroundinfo" 
                    onChange={handleChange}
                    value={editStudent.backgroundinfo} required />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-1">
                    <label>Critical Info</label>
                    <textarea
                    name="criticalinfo" 
                    onChange={handleChange}
                    value={editStudent.criticalinfo} required />
                  </div>
                  
                </div>
                

                <div className="input-container">
                  <div className="input-1">
                    <input type="submit" className="" value="Submit" />
                  </div>
                </div>
            </form>
          </div>
        </section>
    )
}
