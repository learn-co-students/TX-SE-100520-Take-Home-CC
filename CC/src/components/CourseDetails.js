import React from "react";

const CourseDetails = (props) => {
    // console.log(props.courses);
    // const { name, instructor, semester } = props.courses;
    return (
        <div className="ui center aligned header sixteen wide column">
            <p>{props.courses.name}</p>
            <p>
                {props.courses.instructor &&
                    `Ran by: ${props.courses.instructor}`}
            </p>
            <p>
                {props.courses.semester && `During: ${props.courses.semester}`}
            </p>
        </div>
    );
};

// This makes it so, when no course is passed
// CourseDetails will still get a course, but it will be an empty object.
CourseDetails.defaultProps = {
    course: {
        name: "No course selected.",
    },
};

export default CourseDetails;
