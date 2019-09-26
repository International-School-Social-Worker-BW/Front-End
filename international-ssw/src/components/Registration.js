import React,{ useState, useEffect } from 'react'; 
import { Link, Route } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import { addUser } from '../store/actions';
import styled from "styled-components";
import '../styles/sign-up.scss'
import '../styles/variables.scss'
import {connect} from 'react-redux';

const Input = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
`

// const FormContainer = styled.div `
//     display: flex;
//     flex-direction: column;
//     width: 500px;
//     border: 2px solid $primary-color;
//     border-radius: 5px;
// `
const FormTitle = styled.h1 `
    font-size:3.5rem;
    color: #55A0B5;
    text-align: center;
`
class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //user sign up form here
            organization: '',
            password: '',
            useremail: '',
            userfirstname: '',
            userlastname: '',            
            userphone: ''                       
        }
    };

    handleChange = e => {
        this.setState({
        ...this.state,
        [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addUser(this.state, this.props)        
    }

    

    render(){
        console.log("reg page", this.state);
        return(
            <form className = "registration-form" onSubmit={this.handleSubmit}>
                <FormTitle className = "form-title">Sign Up Today</FormTitle>
                <Input className="registration-input">
                    <label>First Name</label>
                    <input 
                    type="text" 
                    name="userfirstname" 
                    onChange={this.handleChange} 
                    value={this.state.userfirstname} required />
                </Input>

                <Input className="registration-input">
                <label>Last Name</label>
                <input 
                type="text" 
                name="userlastname" 
                onChange={this.handleChange} 
                value={this.state.userlastname} required />
                </Input>

                <Input className="registration-input">
                <label>Email</label>
                <input 
                type="text" 
                name="useremail" 
                onChange={this.handleChange} 
                value={this.state.useremail} required />
                </Input>

                <Input className="registration-input">
                <label>Phone Number</label>
                <input 
                type="text" 
                name="userphone" 
                onChange={this.handleChange} 
                value={this.state.userphone} required />
                </Input>

                <Input className="registration-input">
                <label>Password</label>
                <input 
                type="password" 
                name="password" 
                onChange={this.handleChange} 
                value={this.state.password} required />
                </Input>


                <Input className="registration-input">
                <label>Select an Organization</label>
                <select 
                    className = "registration-selector"
                    value={this.state.organization}
                    onChange={this.handleChange}
                    name="organization"
                >
                    <option disabled selected value>--</option>
                    <option>Select an Organization</option>
                    <option value="Ghana Makes A Difference">Ghana Makes A Difference</option>                    
                    <option value="Social Workers of Ghana">Social Workers of Ghana</option>
                    <option value="SCEF">SCEF</option>
                </select>
                </Input>

            <button className = "registration-btn" type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        organization: state.organization,
        password: state.userpassword,
        useremail: state.useremail,
        userfirstname: state.userfirstname,
        userlastname: state.userlastname,        
        userphone: state.userphone
    };
  };

export default connect(mapStateToProps, { addUser })(Registration);
