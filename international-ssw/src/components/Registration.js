import React from "react";
import { connect } from "react-redux";

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
        // const { userfirstname, userlastname, useremail, userphone, password } = this.state;
        this.props.addUser(this.state);
        this.props.history.push('/protected');
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                 <input 
                 type="text" 
                 name="userfirstname" 
                 onChange={this.state.userfirstname} 
                 value={this.state.userfirstname} required />

                <input 
                 type="text" 
                 name="userlastname" 
                 onChange={this.state.userlastname} 
                 value={this.state.userlastname} required />

                <input 
                 type="text" 
                 name="useremail" 
                 onChange={this.state.useremail} 
                 value={this.state.useremail} required />

                <input 
                 type="text" 
                 name="userphone" 
                 onChange={this.state.userphone} 
                 value={this.state.userphone} required />

                <input 
                 type="password" 
                 name="password" 
                 onChange={this.state.password} 
                 value={this.state.password} required />

                 <select>
                     <option value="school-one">school-one</option>
                     <option value="school-two">school-two</option>
                     <option value="school-two">school-three</option>
                 </select>

            <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addUser })(Registration);