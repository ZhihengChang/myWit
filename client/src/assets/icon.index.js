import React from 'react';

import Wentworth from './icon/wentworth.icon';
import Home from './icon/home.icon';
import Moment from './icon/moment.icon';
import Profile from './icon/profile.icon';
import Friends from './icon/friends.icon';
import Apps from './icon/apps.icon';
import Add from './icon/add.icon';
import Remove from './icon/remove.icon';
import Search from './icon/search.icon';
import Information from './icon/information.icon';
import Schedule from './icon/schedule.icon';
import Network from './icon/network.icon';
import Settings from './icon/settings.icon';
import Back from './icon/back.icon';
import Close from './icon/close.icon';
import Write from './icon/write.icon';
import Pen from './icon/pen.icon';
import Post from './icon/post.icon';
import Detail from './icon/detail.icon';
import Signin from './icon/signin.icon';
import Signout from './icon/signout.icon';
import Like from './icon/like.icon';
import Comment from './icon/comment.icon';
import Speak from './icon/speak.icon';
import Id from './icon/id.icon';
import Username from './icon/username.icon';
import Email from './icon/email.icon';
import Password from './icon/password.icon';
import Confirm from './icon/confirm.icon';
import Brightspace from './icon/brightspace.icon';
import Web from './icon/web.icon';
import Library from './icon/library.icon';
import Coverify from './icon/coverify.icon';
import Registration from './icon/registration.icon';
import Outlook from './icon/outlook.icon';
import Avatar from './icon/avatar.icon';


const Icon = props => {
  switch (props.name) {
    case "wentworth":
      return <Wentworth {...props} />;
    case "home":
      return <Home {...props} />;
    case "moment":
      return <Moment {...props} />;
    case "profile":
      return <Profile {...props} />;
    case "friends":
      return <Friends {...props} />;
    case "apps":
      return <Apps {...props} />;
    case "add":
      return <Add {...props} />;
    case "remove":
      return <Remove {...props} />; 
    case "search":
      return <Search {...props} />;
    case "information":
      return <Information {...props} />;
    case "schedule":
      return <Schedule {...props} />;
    case "network":
      return <Network {...props} />;
    case "settings":
      return <Settings {...props} />;
    case "back":
      return <Back {...props} />;
    case "close":
      return <Close {...props} />;
    case "write":
      return <Write {...props} />;
    case "pen":
      return <Pen {...props} />;
    case "post":
      return <Post {...props} />;
    case "detail":
      return <Detail {...props} />;
    case "signin":
      return <Signin {...props} />;
    case "signout":
      return <Signout {...props} />;
    case "like":
      return <Like {...props} />;
    case "comment":
      return <Comment {...props} />;
    case "speak":
      return <Speak {...props} />;
    case "id":
      return <Id {...props} />;
    case "username":
      return <Username {...props} />;
    case "email":
      return <Email {...props} />;
    case "password":
      return <Password {...props} />;
    case "confirm":
      return <Confirm {...props} />;
    case "brightspace":
      return <Brightspace {...props} />;
    case "web":
      return <Web {...props} />;
    case "library":
      return <Library {...props} />;
    case "coverify":
      return <Coverify {...props} />;
    case "registration":
      return <Registration {...props} />;
    case "outlook":
      return <Outlook {...props} />;
    case "avatar":
      return <Avatar {...props} />;
    default:
      return <div></div>;
  }
};

export default Icon;