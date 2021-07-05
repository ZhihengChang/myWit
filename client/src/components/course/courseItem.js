import React from "react";
import PropTypes from "prop-types";

export const courseItem = ({ course }) => {
  return (
    <div className="card">
      <h3>{course.name}</h3>
    </div>
  );
};

courseItem.propTypes = {
  course: PropTypes.object.isRequired,
};

export default courseItem;
