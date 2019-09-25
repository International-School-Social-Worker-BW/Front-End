import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import EditStudent from './EditStudent.js';

const StudentListComponent = props => {
    const [student, setStudent] = useState({});
    useEffect(() => {
        const id = props.match.params.id;
        

        axiosWithAuth()
            .get(`/students/student/${id}`)
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, [props.match.params.id]);
    console.log(props.match.params.id);
    return(
        <div>
            <EditStudent student={student} />
        </div>
    )
}

export default StudentListComponent;