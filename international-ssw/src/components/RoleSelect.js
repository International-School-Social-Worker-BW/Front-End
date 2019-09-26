import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addRole } from '../store/actions';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';

const RoleSelect = props => {
    const [userrole, setUserrole] = useState({
        user: {},
        roleid: null
    });
console.log('roleprops', props);
    useEffect(() => {  
        axiosWithAuth()
            .get(`/users/getcurrentuser`)
            .then(res => {setUserrole({...userrole, user: res.data})
            console.log('useeeffect', res.data)})
            .catch(err => console.log(err)); 
    }, [userrole]);
    

    const handleChange = event => {
        
        event.preventDefault();

        setUserrole({...userrole, [event.target.name]: event.target.value});
        console.log('roldpae', userrole);

      };
    
      const handleSubmit = event => {
        event.preventDefault();
        if (userrole.roleid === 2)
        {
        props.history.push('/protected');}
        props.addRole(userrole, props);
        console.log('madeit', userrole);
        props.history.push('/protected');
      }

    return (
        <div>
            <h2>Are you a School Admin?</h2>
            <form onSubmit={handleSubmit}>
            <select
                onChange={handleChange}
                value={userrole.roleid}
                name="roleid"
                >
                <option disabled selected value>--</option>
                <option value={1}>Yes</option>
                <option value={2}>No</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps, { addRole })(RoleSelect)


// const RoleSelect = props => {
//     const [userrole, setUserrole] = useState({
//         user: {},
//         roleid: null
//     });
// console.log('roleprops', props);
//     useEffect(() => {  
//         axiosWithAuth()
//             .get(`/users/getcurrentuser`)
//             .then(res => {setUserrole({...userrole, user: res.data})
//             console.log('useeeffect', res.data)})
//             .catch(err => console.log(err)); 
//     }, [userrole]);
    

//     const handleChange = event => {
        
//         event.preventDefault();

//         setUserrole({...userrole, [event.target.name]: event.target.value});
//         console.log('roldpae', userrole);

//       };
    
//       const handleSubmit = event => {
//         event.preventDefault();
//         props.addRole(userrole, props);
//         console.log('madeit', userrole);
//         props.history.push('/protected');
//       }

//     return (
//         <div>
//             <h2>Select your role:</h2>
//             <form onSubmit={handleSubmit}>
//             <select
//                 onChange={handleChange}
//                 name="roleid"
//                 >
//                 <option disabled selected value>--</option>
//                 <option value={1}>School Admin</option>
//                 <option value={2}>Social Worker</option>
//             </select>
//             <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
// const mapStateToProps = state => {
//     return {state: state}
// }

// export default connect(mapStateToProps, { addRole })(RoleSelect);