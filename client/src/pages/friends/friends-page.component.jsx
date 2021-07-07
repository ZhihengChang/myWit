import React from 'react'

import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Users from "../../components/user-list/user-list.component";
class FriendsPage extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <SearchBar />
                <SideBar page='friends' authToken={this.props.authToken}/>
                <div className="friendpage">
                    <Users  />
                </div> 
            </div>
        )
    }
}

export default FriendsPage;
