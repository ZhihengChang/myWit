import React from "react";

import SideBar from "../../components/side-bar/side-bar.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import './home-page.styles.css';

const HomePage = () => (
    <div className = 'homepage'> 
        <SideBar />
        <SearchBar />
        
    </div>
)

export default HomePage;