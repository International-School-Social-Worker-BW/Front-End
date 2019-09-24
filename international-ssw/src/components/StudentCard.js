//this component renders a clickable card that takes you to fullStudentCard

import React from "react";
import { connect } from "react-redux";

const StudentCard = (props) => {
    return (
        <div>
            <h2>{props.data.studentfirstname} {props.data.studentlastname}</h2>
            <p>04/03/2019</p>
            <p>{props.data.age}</p>
            <p>{props.data.grade}</p>
        </div>
    )
}
export default connect(null,{})(StudentCard); 