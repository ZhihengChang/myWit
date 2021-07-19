import React from "react";
import axios from "axios";
import showAlert from "../../util/alert";
import { isAuthorized } from "../../util/token";
import { Link } from 'react-router-dom';
import Icon from '../../assets/icon.index';
import "./search-bar.styles.css";


const SearchBar = (props) => (
  <div className='header'>
    <div className='search'>
      <input
        className="search-input"
        type="search"
        onChange={props.handleChange}
      />
      
      {isAuthorized(props.authToken) ? (
        <Link
          className="sign-btn"
          to="/"
          onClick={async () => {
            try{
              let result = await axios.get('/api/users/logout');
              if(result.data.status === 'success'){
                showAlert('success', 'Logged out');
                props.handleAuthentication("loggedout", null);
              }
            }catch(err){
              console.log(err);
              showAlert('error', err.response.data.message);
            }
          }}
        >
          <Icon name="signout" width={10} fill={"#bf3030"}/>
        </Link>
      ):(
        <Link
          className="sign-btn"
          to='/signin'
        >
          <Icon name="signin" width={10} fill={"#34ad32"}/>
        </Link>
      )}
      
    </div>
  </div>
)

export default SearchBar;
