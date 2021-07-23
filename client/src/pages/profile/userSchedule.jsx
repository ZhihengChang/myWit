import React, { Component, Fragment } from 'react'

import SideBar from "../../components/side-bar/side-bar.component";
import PROFILE from "./profile.data"

class userSchedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth_token: 'taken',
        }
    }
    render() {
        console.log(123);
        return (
            <Fragment>
                <SideBar page='schedule' authToken={this.props.authToken}/>
                <div className="card text-left">{PROFILE.crse1}</div>
                <div className="card text-left">{PROFILE.crse2}</div>
                <div className="card text-left">{PROFILE.crse3}</div>
                <div className="card text-left">{PROFILE.crse4}</div>
            </Fragment>
        )
    }
}

export default userSchedule
