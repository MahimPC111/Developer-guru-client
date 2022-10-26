import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            {/* <h3>{courses.length}</h3> */}
            {
                // courses.map(course => <li>{course.name}</li>)
            }
        </div>
    );
};

export default Courses;