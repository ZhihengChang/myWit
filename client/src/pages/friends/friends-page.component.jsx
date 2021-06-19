import React from 'react'

import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Users from "../../components/user-list/user-list.component";

const friends = () => (
    <div>
        <SearchBar />
        <SideBar />
        <div className="container">
            {/* <SideBar />
            <SearchBar /> */}
            <Users  />
        </div> 
    </div>
)

export default friends
