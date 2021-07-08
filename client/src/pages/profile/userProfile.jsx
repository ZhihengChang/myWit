import React, {Fragment, Component } from 'react'
// import PropTypes from "prop-types"
import { Link } from "react-router-dom";

import SideBar from "../../components/side-bar/side-bar.component";
// import CourseItem from '../../components/course-card/course-card';
// import Courses from '../../components/course-list/course';
import PROFILE from "./profile.data"
// import COURSE from "./course.data"

import "./userProfile.css"

class userProfile extends Component {
    constructor(){
        super();
        this.state = {
            auth_token: 'taken',
        }
    }

    // static PropTypes = {
    //     user: PropTypes.object.isRequired
    // }

    render() {
        return (
            <Fragment>
                <SideBar page='profile' authToken={this.props.authToken} />
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={PROFILE.avatar_url} 
                        className="round-img" 
                        alt="" 
                        style={{width:"150px"}} />
                        <h1>{PROFILE.name}</h1>
                        <p>Location: {PROFILE.address}</p>
                        <p>Contact: {PROFILE.wit_email}</p>
                    </div> 
                </div>
                <div className="card text-center">
                    <div className="badge">Graduation term: {PROFILE.graduation}</div>
                    {/* <div className="badge">Advisor: {PROFILE.advisor}</div> */}
                    <div className="badge">Term: {PROFILE.term}</div>
                    <div className="badge">Friends: {PROFILE.friends}</div>
                </div>
                <div className="card text-left">{PROFILE.crse1}</div>
                <div className="card text-left">{PROFILE.crse2}</div>
                <div className="card text-left">{PROFILE.crse3}</div>
                <div className="card text-left">{PROFILE.crse4}</div>
                {/* <Courses /> */}
            </Fragment>  
        )
    }
}

export default userProfile
