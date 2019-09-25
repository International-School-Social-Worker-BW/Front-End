import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addRole, fetchUser } from '../store/actions';


const RoleSelect = props => {
    const [userrole, setUserrole] = useState({
            userrole: ''
    });

    // useEffect(() => {
        
        

    //     axiosWithAuth()
    //         .get(`/users/getcurrentuser`)
    //         .then(res => setUserrole(res.data))
    //         .catch(err => console.log(err)); 
    // }, []);
    

    const handleChange = event => {
        event.preventDefault();
        setUserrole({...userrole, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.addRole(userrole, props);
        console.log('madeit', userrole);
      }

    return (
        <div>
            <h2>Select your role:</h2>
            <form onSubmit={handleSubmit}>
            <select
                value= {userrole.userrole}
                onChange={handleChange}
                >
                <option value="1">School Admin</option>
                <option value="2">Social Worker</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { addRole })(RoleSelect);