import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import StudentListPage from './StudentListPage';

const StudentListComponent = props => {
    const [studentList, setStudentList] = useState({});
    useEffect(() => {
        const student = props.match.params.student;
        

        axiosWithAuth()
            .get(`/students/students`)
            .then(res => setStudentList(res.data))
            .catch(err => console.log(err));
    }, [props.match.params.student]);
    console.log(props.match.params.student);
    return(
        <div>
            <StudentListPage studentList={studentList} />
        </div>
    )
}

export default StudentListComponent;