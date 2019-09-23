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
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // this.props.addUser(user)
    //     // props.history.push('/protected');
    //     // console.log('reg: ',props.history)
    //   }

    render(){
        return(
            <form>
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


            </form>
        )
    }
}

const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addUser })(Registration);