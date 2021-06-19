import React from 'react';

import Wentworth from './icon/wentworth.icon';
import Home from './icon/home.icon';
import Moment from './icon/moment.icon';
import Profile from './icon/profile.icon';
import Friends from './icon/friends.icon';
import Apps from './icon/apps.icon';
import Search from './icon/search.icon';
import Username from './icon/username.icon';
import Password from './icon/password.icon';


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
    case "username":
      return <Username {...props} />;
    case "password":
      return <Password {...props} />;
    default:
      return <div></div>;
  }
};

export default Icon;