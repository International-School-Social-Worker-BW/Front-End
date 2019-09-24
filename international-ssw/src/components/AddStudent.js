//add student form page
import React from "react"
import {connect} from 'react-redux';
import axios from 'axios';
import { addStudent } from '../store/actions';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="studentfirstname" 
                onChange={this.handleChange} 
                value={this.state.studentfirstname} required />

                <input 
                type="text" 
                name="studentlastname" 
                onChange={this.handleChange} 
                value={this.state.studentlastname} required />

                <input 
                type="text" 
                name="age" 
                onChange={this.handleChange} 
                value={this.state.age} required />

                <input 
                type="text" 
                name="grade" 
                onChange={this.handleChange} 
                value={this.state.grade} required />

                <input 
                type="text" 
                name="contactname" 
                onChange={this.handleChange} 
                value={this.state.contactname} required />

                <input 
                type="text" 
                name="contactphone" 
                onChange={this.handleChange} 
                value={this.state.contactphone} required />

                <input 
                type="email" 
                name="contactemail" 
                onChange={this.handleChange} 
                value={this.state.contactemail} required />

                <input 
                type="text" 
                name="backgroundinfo" 
                onChange={this.handleChange} 
                value={this.state.backgroundinfo} required />

                <input 
                type="text" 
                name="criticalinfo" 
                onChange={this.handleChange} 
                value={this.state.criticalinfo} required />

                <input 
                type="text" 
                name="studentfirstname" 
                onChange={this.handleChange} 
                value={this.state.studentfirstname} required />

                <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addStudent })(AddStudent);
