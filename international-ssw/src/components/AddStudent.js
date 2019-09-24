// //add student form page
// import React from "react"
// import {connect} from 'react-redux';
// import axios from 'axios';

// class AddStudent extends React.Component {
    
//     constructor(props){
//        super(props);
//        this.state = {
//     studentid: null,
//     studentfirstname: "",
//     studentlastname: "",
//     age: null,
//     grade: null,
//     status: "",
//     birthcertificate: true,
//     insurance: true,
//     specialneeds: false,
//     contactname: "",
//     relationship: "",
//     contactphone: "",
//     contactemail: "",
//     backgroundinfo: "",
//     criticalinfo: "",
//     }
// }

// handleSubmit = e => {
//     e.preventDefault()
//     this.props.addStudent(this.state, this.props);


//     this.props.history.push('/protected');};

//     handleChange = event => {
//         event.preventDefault();
//         this.setState({[event.target.name]: event.target.value});
//       };

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

//                 <input 
//                 type="text" 
//                 name="studentfirstname" 
//                 onChange={this.handleChange} 
//                 value={this.state.studentfirstname} required />

               

//                 </form>
//             </div>
//         )
//     }
// }
