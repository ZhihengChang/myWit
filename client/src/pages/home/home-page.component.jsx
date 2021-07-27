import React from "react";
import axios from "axios";
import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import PostCardList from "../../components/post-card-list/post-card-list.component";
import PostDetailModal from "../../components/modal/post-detail-modal.component";

import './home-page.styles.css';
class HomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            post: null,
            schoolPosts: [],
            showPostDetail: false,
        }
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    async componentDidMount(){
        try{
            const query = "official=true&sort=-post_ts";
            const result = await axios.get(`/api/posts?${query}`);
            const response = result.data;
            this.setState({ schoolPosts: response.data.posts });
        }catch(err){
            console.log(err);
        }
    }

    selectPost = (post) => {
        this.setState({ post: post}, this.openAndClosePostDetail);
    }

    openAndClosePostDetail = () => {
        this.setState({ showPostDetail: !this.state.showPostDetail })
    }

    render() {
        const searchField = this.state.searchField;
        const schoolPosts = this.state.schoolPosts;
        const showPostDetail = this.state.showPostDetail;
        const user = this.props.currentUser;
        const post = this.state.post;

        const filteredPosts = schoolPosts.filter(post => 
            post.type.toLowerCase().includes(searchField.toLowerCase()) ||
            post.author.toLowerCase().includes(searchField.toLowerCase()) ||
            post.content.toLowerCase().includes(searchField.toLowerCase())   
        );
        return (
            <div className = 'homepage'> 
                <SideBar page='home' authToken={this.props.authToken}/>
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
                    showPostDetail &&
                        <PostDetailModal 
                            post_id={post._id} 
                            user={user}
                            close={this.openAndClosePostDetail}
                        />
                }
            </div>
        )
    }
}

export default HomePage;