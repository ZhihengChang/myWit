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
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value});
    }

    render() {
        const searchField = this.state.searchField;
        const filteredPosts = POSTS.filter(post => 
            post.type.toLowerCase().includes(searchField.toLowerCase()) ||
            post.author.toLowerCase().includes(searchField.toLowerCase()) ||
            post.post_content.toLowerCase().includes(searchField.toLowerCase())   
        );
        return (
            <div className = 'homepage'> 
                <SideBar page='home' authToken={this.props.authToken}/>
                <SearchBar 
                    handleChange = {this.handleChange} 
                    authToken={this.props.authToken} 
                    handleAuthentication = {this.props.handleAuthentication}
                />
                <PostCardList data={filteredPosts} />
            </div>
        )
    }
}

export default HomePage;