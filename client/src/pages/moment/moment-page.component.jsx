import React from "react";
import axios from "axios";
import { isAuthorized } from "../../util/token";
import showAlert from "../../util/alert";
import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import PostCardList from "../../components/post-card-list/post-card-list.component";
import CreatePostModal from "../../components/modal/create-post-modal.component";

import './moment-page.styles.css';
class MomentPage extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            createPost: false,
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
        this.fetchPosts();
    }

    fetchPosts = async () => {
        console.log("fetch from server");
        try{
            const query = "official=false&sort=-post_ts";
            const result = await axios.get(`/api/posts?${query}`);
            const response = result.data;
            this.setState({ posts: response.data.posts });
        }catch(err){
            console.log(err);
        }
    }

    openAndCloseModal = () => {
        this.setState({ createPost: !this.state.createPost })
    }

    render() {
        const searchField = this.state.searchField;
        const createPost = this.state.createPost;
        const posts = this.state.posts;
        const user = this.props.currentUser;
        const filteredPosts = posts.filter(post => 
            post.type.toLowerCase().includes(searchField.toLowerCase()) ||
            post.author.toLowerCase().includes(searchField.toLowerCase()) ||
            post.content.toLowerCase().includes(searchField.toLowerCase())   
        );
        return (
            <div className = 'momentpage'> 
                <SideBar 
                    page='moment' 
                    authToken={this.props.authToken} 
                    onClickFunctions={
                        {create: this.openAndCloseModal}
                        //other functions on sidebar
                    }
                />
                <SearchBar 
                    handleChange = {this.handleChange} 
                    authToken={this.props.authToken} 
                    handleAuthentication = {this.props.handleAuthentication}
                />
                <PostCardList data={filteredPosts}/>
                {
                    createPost && <CreatePostModal author={user.username} close={this.openAndCloseModal} fetch={this.fetchPosts}/>
                }
                
            </div>
        )
    }
}

export default MomentPage;