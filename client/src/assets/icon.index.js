import React from 'react';

import Wentworth from './icon/wentworth.icon';
import Home from './icon/home.icon';
import Moment from './icon/moment.icon';
import Profile from './icon/profile.icon';
import Friends from './icon/friends.icon';
import Apps from './icon/apps.icon';
import Search from './icon/search.icon';
import Signin from './icon/signin.icon';
import Signout from './icon/signout.icon';
import Id from './icon/id.icon';
import Username from './icon/username.icon';
import Email from './icon/email.icon';
import Password from './icon/password.icon';
import Confirm from './icon/confirm.icon';


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
    case "search":
      return <Search {...props} />;
    case "signin":
      return <Signin {...props} />;
    case "signout":
      return <Signout {...props} />;
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
    default:
      return <div></div>;
  }
};

export default Icon;