import React from "react";
import axios from "axios";
import { isAuthorized } from "../../util/token";
import showAlert from "../../util/alert";
import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import PostCardList from "../../components/post-card-list/post-card-list.component";

import './moment-page.styles.css';
class MomentPage extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            posts: []
        }
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value});
    }

    async componentDidMount(){
        if(!isAuthorized(this.props.authToken)){
            this.props.history.push('/');
            showAlert('error', 'Please sign in')
        }
        try{
            const query = "official=false&sort=-post_ts";
            const result = await axios.get(`/api/posts?${query}`);
            const response = result.data;
            this.setState({ posts: response.data.posts });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        const searchField = this.state.searchField;
        const posts = this.state.posts;

        const filteredPosts = posts.filter(post => 
            post.type.toLowerCase().includes(searchField.toLowerCase()) ||
            post.author.toLowerCase().includes(searchField.toLowerCase()) ||
            post.content.toLowerCase().includes(searchField.toLowerCase())   
        );
        return (
            <div className = 'momentpage'> 
                <SideBar page='moment' authToken={this.props.authToken} />
                <SearchBar 
                    handleChange = {this.handleChange} 
                    authToken={this.props.authToken} 
                    handleAuthentication = {this.props.handleAuthentication}
                />
                <PostCardList data={filteredPosts}/>
            </div>
        )
    }
}

export default MomentPage;