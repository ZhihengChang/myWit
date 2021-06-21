import React from "react";

import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";

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
            </div>
        )
    }
}

export default HomePage;