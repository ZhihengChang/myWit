import React from 'react'
import axios from 'axios';
import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import UserList from "../../components/user-list/user-list.component";
class FriendsPage extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            friends: [],
        }
    }

    componentDidMount(){
        this.fetchFriends();
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    }

    fetchFriends = async () => {
        const user = this.props.currentUser;
        try{
            const result = await axios.get(`/api/users/friends/${user._id}`);
            const response = result.data;
            console.log(response);
            this.setState({ friends: response.data });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        const user = this.props.currentUser;
        const user_id = (user)? user._id : '';
        const friends = this.state.friends;
        console.log("friends: ", friends);
        return (
            <div>
                <SearchBar 
                    user_id = {user_id}
                    handleChange = {this.handleChange} 
                    authToken={this.props.authToken} 
                    handleAuthentication = {this.props.handleAuthentication}
                />
                <SideBar page='friends' authToken={this.props.authToken}/>
                <div className="friendpage">
                    <UserList friends={friends}/>
                </div> 
            </div>
        )
    }
}

export default FriendsPage;
