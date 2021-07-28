import React, { Component } from "react";
import Icon from '../../assets/icon.index';
import './user-block.styles.css';

const UserBlock = ({username, status, lastActive}) => (
  <div className='user-block'>
    <Icon name={"avatar"} width={10} className={"friend-avatar"}/>
    <div className='user-block-status'
      style={{backgroundColor: (status==='online')? 'green':'#f53333'}}
    ></div>
    <span className='user-block-username'>{username}</span>
    <span className='user-block-lastActive'>{new Date(lastActive).toDateString()}</span>
  </div>
)

export default UserBlock;
