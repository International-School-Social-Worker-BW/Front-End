//add student form page Form logic is currently not working.
import React from "react"
import {connect} from 'react-redux';
import axios from 'axios';
import { addStudent } from '../store/actions';
import ProtectedNavBar from './ProtectedNavBar.js';

class AddStudent extends React.Component {
    
    constructor(props){
       super(props);
       this.state = {
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
    criticalinfo: "",
    }
}

handleSubmit = e => {
    e.preventDefault()
    this.props.addStudent(this.state, this.props);


    this.props.history.push('/protected');};

    handleChange = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
      };

    render() {
        return (
            <section>
                <ProtectedNavBar />
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input 
                type="text" 
                name="studentfirstname" 
                onChange={this.handleChange} 
                value={this.state.studentfirstname} required />

                <label>Last Name</label>
                <input 
                type="text" 
                name="studentlastname" 
                onChange={this.handleChange} 
                value={this.state.studentlastname} required />

                <label>Age</label>
                <input 
                type="text" 
                name="age" 
                onChange={this.handleChange} 
                value={this.state.age} required />

                <label>Grade</label>
                <input 
                type="text" 
                name="grade" 
                onChange={this.handleChange} 
                value={this.state.grade} required />
                <label>Student Status:</label>
                <select
                    value={this.state.status}
                    onChange={this.handleChange}
                    name="status"                
                >
                    <option value="Current Student">Current Student</option>                    
                    <option value="Past Student">Past Student</option>
                    <option value="Visiting">Visiting</option>
                </select>
                <label>Birth Certificate?</label>
                <select
                    value={this.state.birthcertificate}
                    onChange={this.handleChange}
                    name="birthcertificate"                
                >
                    <option value="true">Yes</option>                    
                    <option value="false">No</option>
                </select>
                <label>Insurance?</label>
                <select
                    value={this.state.insurance}
                    onChange={this.handleChange}
                    name="insurance"                
                >
                    <option value="true">Yes</option>                    
                    <option value="false">No</option>
                </select>
                <label>Special needs?</label>
                <select
                    value={this.state.specialneeds}
                    onChange={this.handleChange}
                    name="specialneeds"                
                >
                    <option value="true">Yes</option>                    
                    <option value="false">No</option>
                </select>
                <label>Contact Name:</label>
                <input 
                type="text" 
                name="contactname" 
                onChange={this.handleChange} 
                value={this.state.contactname} required />
                <label>Contact Phone:</label>
                <input 
                type="text" 
                name="contactphone" 
                onChange={this.handleChange} 
                value={this.state.contactphone} required />
                <label>Contact Email:</label>
                <input 
                type="email" 
                name="contactemail" 
                onChange={this.handleChange} 
                value={this.state.contactemail} required />
                <label>Background Info:</label>
                <input 
                type="text" 
                name="backgroundinfo" 
                onChange={this.handleChange} 
                value={this.state.backgroundinfo} required />
                <label>Critical Info:</label>
                <input 
                type="text" 
                name="criticalinfo" 
                onChange={this.handleChange} 
                value={this.state.criticalinfo} required />

                

                <button type="submit">Submit</button>

                </form>
            </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addStudent })(AddStudent);
