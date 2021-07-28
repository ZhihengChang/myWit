import React, { Component } from "react";

import SideBar from "../../components/side-bar/side-bar.component";
import AppList from "../../components/app-list/app-list.component";

export class apps extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <div>
        <SideBar page='apps' authToken={this.props.authToken} />
        <AppList />
      </div>
    );
  }
}

export default apps;
