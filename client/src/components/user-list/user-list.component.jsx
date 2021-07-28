import React, { Component } from "react";
import UserBlock from "../user-block/user-block.component";
import './user-list.styles.css';
class UserList extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const friends = this.props.friends;
    console.log(friends);
    return (
      <div className='user-list'>
        {
          friends.map(({username, status, lastActive})=>(
            <UserBlock username={username} status={status} lastActive={lastActive}/>
          ))
        }
      </div>
    );
  }
}

export default UserList;
