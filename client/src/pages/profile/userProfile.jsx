import React, {Fragment, Component } from 'react'
// import PropTypes from "prop-types"
import { Link } from "react-router-dom";

import SideBar from "../../components/side-bar/side-bar.component";
// import courses from "../../components/course/courses"
import PROFILE from "./profile.data"

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
        const avatar_url = PROFILE.filter(profile => profile.avatar_url);
        const name = PROFILE.filter(profile => profile.name);
        
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">
                    Back to Home
                </Link>
                <SideBar auth_token={this.state.auth_token} />
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} 
                        className="round-img" 
                        alt="" 
                        style={{width:"150px"}} />
                        <h1>{name}</h1>
                        <p>Location: {PROFILE.address}</p>
                    </div> 
                </div>
                <div className="card text-center">
                    <div className="">Major: {PROFILE.Major}</div>
                    <div className="">Advisor: {PROFILE.advisor}</div>
                </div>
                {/* <courses courses={courses} /> */}
            </Fragment>  
        )
    }
}

export default userProfile
