//this component renders a clickable card that takes you to fullStudentCard

import React from "react";
import { connect } from "react-redux";

const StudentCard = (props) => {
    return (
        <div>
            <h2>Student Name Prop Here</h2>
            <p>Date of last visit prop here</p>
            <p>Age Prop here</p>
            <p>grade prop here</p>
        </div>
    )
}
export default connect(null,{})(StudentCard); 