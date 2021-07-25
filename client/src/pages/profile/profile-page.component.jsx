import React, {Fragment, Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import NameCard from '../../components/name-card/name-card.component';
import SideBar from "../../components/side-bar/side-bar.component";
import PostCardList from '../../components/post-card-list/post-card-list.component';

import "./profile-page.styles.css";

class ProfilePage extends Component {
    constructor(){
        super();
        this.state = {
           student: null,
           studentPosts: [],
        }
    }

    async componentDidMount(){
        //fetch student data
        await this.fetchStudent();
        await this.fetchStudentPosts();
    }

    fetchStudent = async () => {
        const currentUser = this.props.currentUser;
        try{
            const result = await axios.get(`/api/users/student/${currentUser.wit_id}`);
            const response = result.data;
            console.log(response.data.student);
            this.setState({ student: response.data.student });
        }catch(err){
            console.log(err);
        }
    }

    fetchStudentPosts = async () => {
        const currentUser = this.props.currentUser;
        try{
            const query = `author=${currentUser.username}&sort=-post_ts`;
            const result = await axios.get(`/api/posts?${query}`);
            const response = result.data;
            this.setState({ studentPosts: response.data.posts });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        const user = this.props.currentUser;
        const student = this.state.student;
        const studentPosts = this.state.studentPosts;
        const listStyle = {
            position: 'absolute',
            top: '300px',
            margin: 'auto',
            width: '100%',
        }

        return (
            <div className = 'profilepage'>
                <SideBar page='profile' authToken={this.props.authToken} />
                <div className = 'blcok top'>
                {
                    student && <NameCard student={student} avatar={user.avatar}/>
                }
                </div>
                <div className = 'block mid'></div>
                <div className = "student-posts">
                    <PostCardList
                        data={studentPosts} 
                        userid={(user)? user._id : ''} 
                        styles={listStyle}
                    />
                </div>
                
            </div>
        )
    }
}

export default ProfilePage
