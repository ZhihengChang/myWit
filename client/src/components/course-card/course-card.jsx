import React, { Component } from 'react'

import COURSES from '../../pages/profile/course.data'

export class CourseItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card">
                <h3>
                    {COURSES.map(course => course.crse||course.prof||course.time)}
                </h3>
                
            </div>
        )
    }
}

export default CourseItem;
