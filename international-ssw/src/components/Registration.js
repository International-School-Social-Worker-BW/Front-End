import React from "react";
import { connect } from "react-redux";
import styled from "styled-components"
//actions
import { addUser } from '../store/actions'
import '../styles/sign-up.scss'
import '../styles/variables.scss'

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
    color: #384148;
    text-align: center;
`


class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //user sign up form here
            userfirstname: '',
            userlastname:'',
            useremail: '',
            userphone: '',
            password: '',
            organization: ''            
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
        //const { userfirstname, userlastname, useremail, userphone, password } = this.state;
        this.props.addUser(this.state, this.props);
        this.props.props.history.push('/role');
    }

    

    render(){
        console.log("reg page", this.props);
        return(
            <form className = "registration-form" onSubmit={this.handleSubmit}>
                <FormTitle>Sign Up Today</FormTitle>
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
    return {error: state.error}
}

export default connect(mapStateToProps, { addUser })(Registration);