import React, { useState } from 'react';
import { connect } from "react-redux";

const RoleSelect = props => {
    const [userrole, setUserrole] = useState({
            userrole: ''
    });

    const handleChange = event => {
        event.preventDefault();
        setUserrole({...userrole, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.login(userrole, props);
      }

    return (
        <div>
            <h2>Select your role:</h2>
            <form onSubmit={handleSubmit}>
            <select
                value= {userrole.userrole}
                onChange={handleChange}
                >
                <option>Schoole Admin</option>
                <option>Social Worker</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RoleSelect;