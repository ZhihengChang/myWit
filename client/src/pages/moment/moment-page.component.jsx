import React from "react";
import axios from "axios";
import { isAuthorized } from "../../util/token";
import showAlert from "../../util/alert";
import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import PostCardList from "../../components/post-card-list/post-card-list.component";
import CreatePostModal from "../../components/modal/create-post-modal.component";
import PostDetailModal from "../../components/modal/post-detail-modal.component";

import './moment-page.styles.css';
class MomentPage extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            post: null,
            posts: [],
            createPost: false,
            showPostDetail: false,
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

    selectPost = (post) => {
        this.setState({ post: post}, this.openAndClosePostDetail);
    }

    openAndCloseModal = () => {
        this.setState({ createPost: !this.state.createPost })
    }

    openAndClosePostDetail = () => {
        this.setState({ showPostDetail: !this.state.showPostDetail })
    }

    render() {
        const searchField = this.state.searchField;
        const createPost = this.state.createPost;
        const showPostDetail = this.state.showPostDetail;
        const posts = this.state.posts;
        const post = this.state.post;
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
                <PostCardList 
                    data={filteredPosts} 
                    userid={(user)? user._id : ''}
                    styles={null}
                    select={this.selectPost}
                />
                {
                    createPost && 
                        <CreatePostModal 
                            author={user.username} 
                            close={this.openAndCloseModal} 
                            fetch={this.fetchPosts}
                        />
                }
                {
                    showPostDetail &&
                        <PostDetailModal 
                            post={post} 
                            userid={(user)? user._id : ''}
                            close={this.openAndClosePostDetail}/>
                }
                
            </div>
        )
    }
}

export default MomentPage;