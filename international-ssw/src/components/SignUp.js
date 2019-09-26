import React,{ useState, useEffect } from 'react'; 
import { Link, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../store/actions';
import styled from "styled-components";
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
    color: #55A0B5;
    text-align: center;
`

export default function SignUp () {
    const [inputValue, setInputValue] = useState({
        userfirstname: '',
        userlastname:'',
        useremail: '',
        userphone: '',
        password: '',
        organization: ''
    })
    
    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name] : e.target.value})
        console.log('regHandlE', inputValue)       
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser(inputValue.userfirstname, inputValue.userlastname, inputValue.useremail, inputValue.userphone, inputValue.password, inputValue.organization));
    }

    return(
        <form className = "registration-form" onSubmit={handleSubmit}>
            <FormTitle className ="form-title">Sign Up Today</FormTitle>
                <Input className="registration-input">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        name="userfirstname" 
                        onChange={handleChange} 
                        value={inputValue.userfirstname} required 
                    />
                </Input>

                <Input className="registration-input">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        name="userlastname" 
                        onChange={handleChange} 
                        value={inputValue.userlastname} required 
                    />
                </Input>

                <Input className="registration-input">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="useremail" 
                        onChange={handleChange} 
                        value={inputValue.useremail} required
                    />
                </Input>

                <Input className="registration-input">
                    <label>Phone Number</label>
                    <input 
                        type="text" 
                        name="userphone" 
                        onChange={handleChange} 
                        value={inputValue.userphone} required 
                    />
                </Input>

                <Input className="registration-input">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange} 
                        value={inputValue.password} required 
                    />
                </Input>

                <Input className="registration-input">
                    <label>Select an Organization</label>
                    <select 
                        className = "registration-selector"
                        value={inputValue.organization}
                        onChange={handleChange}
                        name="organization"
                    >
                        <option disabled selected value>--</option>
                        <option value="Ghana Makes A Difference">Ghana Makes A Difference</option>                    
                        <option value="Social Workers of Ghana">Social Workers of Ghana</option>
                        <option value="SCEF">SCEF</option>
                    </select>
                </Input>

            <button className = "registration-btn" type="submit">Submit</button>
        </form>
    )
}