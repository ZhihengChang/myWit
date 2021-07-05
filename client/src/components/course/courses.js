import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseItem from "./courseItem";

export const courses = ({ courses }) => {
  return courses.map((course) => (
    <CourseItem course={course} key={course.id} />
  ));
};

courses.PropTypes = {
  courses: PropTypes.array.isRequired,
};

export default courses;
