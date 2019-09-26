import React, { useState } from 'react';
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
        <section>
           <ProtectedNavBar />
            
            <h1>Update Student</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                type="text" 
                name="studentfirstname" 
                onChange={handleChange} 
                value={editStudent.studentfirstname} required />

                <label>Last Name</label>
                <input 
                type="text" 
                name="studentlastname" 
                onChange={handleChange} 
                value={editStudent.studentlastname} required />

                <label>Age</label>
                <input 
                type="text" 
                name="age" 
                onChange={handleChange} 
                value={editStudent.age} required />

                <label>Grade</label>
                <input 
                type="text" 
                name="grade" 
                onChange={handleChange}
                value={editStudent.grade} required />

                <label>Student Status:</label>
                <select
                    value={editStudent.status}
                    onChange={handleChange}
                    name="status"
                    required                
                >
                    <option value="Current Student">Current Student</option>                    
                    <option value="Past Student">Past Student</option>
                    <option value="Visiting">Visiting</option>
                </select>

                <label>Birth Certificate?</label>
                <select
                    value={editStudent.birthcertificate}
                    onChange={handleChange}
                    name="birthcertificate" 
                    required               
                >
                    <option value="true">Yes</option>                    
                    <option value="false">No</option>
                </select>

                <label>Insurance?</label>
                <select
                    value={editStudent.insurance}
                    onChange={handleChange}
                    name="insurance" 
                    required               
                >
                    <option value="true">Yes</option>                    
                    <option value="false">No</option>
                </select>

                <label>Special needs?</label>
                <select
                    value={editStudent.specialneeds}
                    onChange={handleChange}
                    name="specialneeds" 
                    required               
                >
                    <option value="true">Yes</option>                    
                    <option value="false">No</option>
                </select>

                <label>Contact Name:</label>
                <input 
                type="text" 
                name="contactname" 
                onChange={handleChange} 
                value={editStudent.contactname} required />

                <label>Contact Phone:</label>
                <input 
                type="text" 
                name="contactphone" 
                onChange={handleChange} 
                value={editStudent.contactphone} required />

                <label>Contact Email:</label>
                <input 
                type="email" 
                name="contactemail" 
                onChange={handleChange}
                value={editStudent.contactemail} required />

                <label>Relationship:</label>
                <select
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

                <label>Background Info:</label>
                <input 
                type="text" 
                name="backgroundinfo" 
                onChange={handleChange}
                value={editStudent.backgroundinfo} required />

                <label>Critical Info:</label>
                <input 
                type="text" 
                name="criticalinfo" 
                onChange={handleChange}
                value={editStudent.criticalinfo} required />

                

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}