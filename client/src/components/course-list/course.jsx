import React, { Component } from 'react'
import CourseItem from '../course-card/course-card'

export const Courses = ({courses}) => {
        return courses.map((courses) => <CourseItem courses={courses} key={courses.crse} />);
    }

export default Courses;
