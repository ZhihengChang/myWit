import React from 'react';

import Home from './icon/home.icon';


const Icon = props => {
  switch (props.name) {
    case "home":
      return <Home {...props} />;
    default:
      return;
  }
};

export default Icon;