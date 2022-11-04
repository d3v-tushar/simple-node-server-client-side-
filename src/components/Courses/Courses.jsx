import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Custom Hook/UseTitle/UseTitle';

const Courses = () => {
    const courses = useLoaderData();
    UseTitle("Courses");
    return (
        <div>
            <h2>Total Couses: {courses.length}</h2>
            {
                courses.map(course => <div key={course.id}>
                    <h3>Couse Name: {course.course}</h3>
                    <img src={course.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default Courses;