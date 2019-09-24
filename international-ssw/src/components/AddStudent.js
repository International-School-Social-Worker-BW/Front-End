//add student form page
import React from "react"
import {connect} from 'react-redux';
import axios from 'axios';

class AddStudent extend React.Component {
    state = {
    studentid: 0,
    studentfirstname: "",
    studentlastname: "",
    age: 0,
    grade: 0,
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
    const {
    studentid: 0,
    studentfirstname: "",
    studentlastname: "",
    age: 0,
    grade: 0,
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
    } =this.state;

    this.props.addStudent({
    studentid: 0,
    studentfirstname: "",
    studentlastname: "",
    age: 0,
    grade: 0,
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
    });

    this.props.history.push('/protected');

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
                </Input>

                </form>
            </div>
        )
    }

}