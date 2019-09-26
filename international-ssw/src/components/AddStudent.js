//add student form page 
import React from "react"
import {connect} from 'react-redux';
import styled from 'styled-components';
import { addStudent } from '../store/actions';
import ProtectedNavBar from './ProtectedNavBar.js';

import '../styles/add-student-form.scss'


const Input = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
`

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
            birthcertificate: "",
            insurance: "",
            specialneeds: "",
            contactname: "",
            relationship: "",
            contactphone: "",
            contactemail: "",
            backgroundinfo: "",
            criticalinfo: ""
        }
    }

handleSubmit = e => {
    console.log(this.state)
    e.preventDefault()
    this.props.addStudent(this.state, this.props);

    this.props.history.push('/protected');
}
    handleChange = event => {
        console.log(this.state)
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <section>
                <ProtectedNavBar />
                <div className = "form-container">
                <form className = "add-form" onSubmit={this.handleSubmit}>

                    <h1>Add Student</h1>
                    <div className = "name-section" >
                        <Input className = "student-input">
                            <label>First Name</label>
                            <input 
                            type="text" 
                            name="studentfirstname" 
                            onChange={this.handleChange} 
                            value={this.state.studentfirstname} required />
                        </Input>

                        <Input className = "student-input">
                            <label>Last Name</label>
                            <input 
                            type="text" 
                            name="studentlastname" 
                            onChange={this.handleChange} 
                            value={this.state.studentlastname} required />
                        </Input>
                    </div>

                    <div className = "age-grade">
                        <Input className = "student-input">
                            <label>Age</label>
                            <input 
                            type="text" 
                            name="age" 
                            onChange={this.handleChange} 
                            value={this.state.age} required />
                        </Input>

                        <Input className = "student-input">
                            <label>Grade</label>
                            <input 
                            type="text" 
                            name="grade" 
                            onChange={this.handleChange} 
                            value={this.state.grade} required />
                        </Input>
                    </div>

                    <div className = "student-statuses">
                        <Input className = "student-input">
                            <label>Student Status:</label>
                            <select
                                value={this.state.status}
                                onChange={this.handleChange}
                                name="status"
                                required                
                            >
                                <option>Select Status</option>
                                <option value="Current Student">Current Student</option>                    
                                <option value="Past Student">Past Student</option>
                                <option value="Visiting">Visiting</option>
                            </select>
                        </Input >

                        <Input className = "student-input">
                            <label>Do they have a Birth Certificate?</label>
                            <select
                                value={this.state.birthcertificate}
                                onChange={this.handleChange}
                                name="birthcertificate" 
                                required               
                            >   
                                <option>Select an Option</option>
                                <option value={true}>Yes</option>                    
                                <option value={false}>No</option>
                            </select>
                        </Input>
                        </div>

                        <div className = "disabilities">

                        <Input className = "student-input-1">
                            <label>Do they have Insurance?</label>
                            <select
                                value={this.state.insurance}
                                onChange={this.handleChange}
                                name="insurance" 
                                required               
                            >
                                <option>Select an Option</option>
                                <option value={true}>Yes</option>                    
                                <option value={false}>No</option>
                            </select>
                        </Input>
                        <Input className = "student-input-2">
                            <label>Do they have any physical, intellectual, emotional, behavioral or learning disabilities?</label>
                            <select
                                value={this.state.specialneeds}
                                onChange={this.handleChange}
                                name="specialneeds"
                                required                
                            >
                                <option>Select an Option</option>
                                <option value={true}>Yes</option>                    
                                <option value={false}>No</option>
                            </select>
                        </Input>
                    </div>
                    

                    <div className="contactName-phone">
                        <Input className = "student-input">
                            <label>Contact Name:</label>
                            <input 
                            type="text" 
                            name="contactname" 
                            onChange={this.handleChange} 
                            value={this.state.contactname} required />
                        </Input>

                        <Input className = "student-input">
                            <label>Contact Phone:</label>
                            <input 
                            type="text" 
                            name="contactphone" 
                            onChange={this.handleChange} 
                            value={this.state.contactphone} required />
                        </Input>
                    </div>

                    <div className = "email-relationship">
                        <Input className = "student-input">
                            <label>Contact Email:</label>
                            <input 
                            type="email" 
                            name="contactemail" 
                            onChange={this.handleChange} 
                            value={this.state.contactemail} required />
                        </Input>

                        <Input className = "student-input">
                            <label>Relationship:</label>
                            <select
                                value={this.state.relationship}
                                onChange={this.handleChange}
                                name="relationship" 
                                required               
                            >
                                <option>Select an Option</option>
                                <option value="Mother">Mother</option>                    
                                <option value="Father">Father</option>
                                <option value="Guardian">Guardian</option>
                                <option value="Grandparent">Gradparent</option>
                                <option value="Other Relation">Other Relation</option>
                            </select>
                        </Input>
                    </div>

                    <div className = "history-info">
                        <Input className = "student-input">
                            <label>Social History/Background:</label>
                            <textarea 
                            type="text" 
                            name="backgroundinfo" 
                            onChange={this.handleChange} 
                            value={this.state.backgroundinfo} required />
                        </Input>
                    </div>

                    <div className = "critical-info">
                        <Input className = "student-input">
                            <label>Critical Info:</label>
                            <textarea 
                            type="text" 
                            name="criticalinfo" 
                            onChange={this.handleChange} 
                            value={this.state.criticalinfo} required />
                        </Input>
                    </div>
                    <div className="submit-btn">
                        <button className = "add-btn" type="submit">Submit</button>
                    </div>
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
