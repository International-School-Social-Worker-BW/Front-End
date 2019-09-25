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
                <form className = "add-form" onSubmit={this.handleSubmit}>
                    <div className = "name-section" >
                        <Input className = "student-input">
                            <label>First Name</label>
                            <input 
                            type="text" 
                            name="studentfirstname" 
                            onChange={this.handleChange} 
                            value={this.state.studentfirstname} required />
                        </Input>

                        <Input>
                            <label>Last Name</label>
                            <input 
                            type="text" 
                            name="studentlastname" 
                            onChange={this.handleChange} 
                            value={this.state.studentlastname} required />
                        </Input>
                    </div>

                    <div className = "age-grade">
                        <Input>
                            <label>Age</label>
                            <input 
                            type="text" 
                            name="age" 
                            onChange={this.handleChange} 
                            value={this.state.age} required />
                        </Input>

                        <Input>
                            <label>Grade</label>
                            <input 
                            type="text" 
                            name="grade" 
                            onChange={this.handleChange} 
                            value={this.state.grade} required />
                        </Input>
                    </div>

                    <div className = "student-statuses">
                        <Input>
                            <label>Student Status:</label>
                            <select
                                value={this.state.status}
                                onChange={this.handleChange}
                                name="status"
                                required                
                            >
                                <option value="Current Student">Current Student</option>                    
                                <option value="Past Student">Past Student</option>
                                <option value="Visiting">Visiting</option>
                            </select>
                        </Input>

                        <Input>
                            <label>Birth Certificate?</label>
                            <select
                                value={this.state.birthcertificate}
                                onChange={this.handleChange}
                                name="birthcertificate" 
                                required               
                            >
                                <option value="true">Yes</option>                    
                                <option value="false">No</option>
                            </select>
                        </Input>

                        <Input>
                            <label>Insurance?</label>
                            <select
                                value={this.state.insurance}
                                onChange={this.handleChange}
                                name="insurance" 
                                required               
                            >
                                <option value="true">Yes</option>                    
                                <option value="false">No</option>
                            </select>
                        </Input>

                        <Input>
                            <label>Do they have any physical, intellectual, emotional, behavioral or learning disabilities?</label>
                            <select
                                value={this.state.specialneeds}
                                onChange={this.handleChange}
                                name="specialneeds"
                                required                
                            >
                                <option value="true">Yes</option>                    
                                <option value="false">No</option>
                            </select>
                        </Input>
                    </div>

                    <div className="contactName-phone">
                        <Input>
                            <label>Contact Name:</label>
                            <input 
                            type="text" 
                            name="contactname" 
                            onChange={this.handleChange} 
                            value={this.state.contactname} required />
                        </Input>

                        <Input>
                            <label>Contact Phone:</label>
                            <input 
                            type="text" 
                            name="contactphone" 
                            onChange={this.handleChange} 
                            value={this.state.contactphone} required />
                        </Input>
                    </div>

                    <div className = "email-relationship">
                        <Input>
                            <label>Contact Email:</label>
                            <input 
                            type="email" 
                            name="contactemail" 
                            onChange={this.handleChange} 
                            value={this.state.contactemail} required />
                        </Input>

                        <Input>
                            <label>Relationship:</label>
                            <select
                                value={this.state.relationship}
                                onChange={this.handleChange}
                                name="relationship" 
                                required               
                            >
                                <option value="mother">Mother</option>                    
                                <option value="father">Father</option>
                                <option value="guardian">Guardian</option>
                                <option value="grandparent">Gradparent</option>
                                <option value="other relation">Other Relation</option>
                            </select>
                        </Input>
                    </div>

                    <Input>
                        <label>Social History/Background:</label>
                        <input 
                        type="text" 
                        name="backgroundinfo" 
                        onChange={this.handleChange} 
                        value={this.state.backgroundinfo} required />
                    </Input>

                    <Input>
                        <label>Critical Info:</label>
                        <input 
                        type="text" 
                        name="criticalinfo" 
                        onChange={this.handleChange} 
                        value={this.state.criticalinfo} required />
                    </Input>

                    <button className = "add-btn" type="submit">Submit</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addStudent })(AddStudent);
