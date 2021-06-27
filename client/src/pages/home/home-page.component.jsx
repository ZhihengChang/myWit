import React from "react";

import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import PostCardList from "../../components/post-card-list/post-card-list.component";
import POSTS from './posts.data';

import './home-page.styles.css';
class HomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            auth_token: ''
        }
    }

    render() {
        return (
            <div className = 'homepage'> 
                <SideBar auth_token={this.state.auth_token}/>
                <SearchBar />
                <PostCardList data={POSTS}/>
            </div>
        )
    }
}

export default HomePage;