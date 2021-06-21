import React from 'react'

import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Users from "../../components/user-list/user-list.component";
class FriendsPage extends React.Component{
    constructor(){
        super();
        this.state = {
            auth_token: 'token'
        }
    }

    render() {
        return (
            <div>
                <SearchBar />
                <SideBar auth_token={this.state.auth_token}/>
                <div className="container">
                    <Users  />
                </div> 
            </div>
        )
    }
}

export default FriendsPage;
