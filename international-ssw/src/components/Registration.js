import React from "react";
import { connect } from "react-redux";
import styled from "styled-components"

const Input = styled.div `
    display: flex;
    flex-direction: column;
`

const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 2px solid $primary-color;
`

//actions
import { addUser } from '../store/actions'

class Registration extends React.Component {
    constructor(){
        super();
        this.state = {
            //user sign up form here
            userfirstname: '',
            userlastname:'',
            useremail: '',
            userphone: '',
            password: '',
            
        },

        // schoolOptions: ['Ghana Makes A Difference', 'Social Workers of Ghana', 'SCEF'];
    };

    

    handleChange = e => {
        this.setState({
        ...this.state,
        [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // const { userfirstname, userlastname, useremail, userphone, password } = this.state;
        this.props.addUser(this.state);
        this.props.history.push('/protected');
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <FormContainer>
                <Input>
                    <label>First Name</label>
                    <input 
                    type="text" 
                    name="userfirstname" 
                    onChange={this.state.userfirstname} 
                    value={this.state.userfirstname} required />
                </Input>

                <Input>
                <label>Last Name</label>
                <input 
                type="text" 
                name="userlastname" 
                onChange={this.state.userlastname} 
                value={this.state.userlastname} required />
                </Input>

                <Input>
                <label>Email</label>
                <input 
                type="text" 
                name="useremail" 
                onChange={this.state.useremail} 
                value={this.state.useremail} required />
                </Input>

                <Input>
                <label>Phone Number</label>
                <input 
                type="text" 
                name="userphone" 
                onChange={this.state.userphone} 
                value={this.state.userphone} required />
                </Input>

                <Input>
                <label>Password</label>
                <input 
                type="password" 
                name="password" 
                onChange={this.state.password} 
                value={this.state.password} required />
                </Input>

                <label>Select an Organization</label>
                <select>
                    <option selected value="school-one">school-one</option>
                    <option value="school-two">school-two</option>
                    <option value="school-two">school-three</option>
                </select>
                </FormContainer>

            <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addUser })(Registration);