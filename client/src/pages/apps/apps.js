import React, { Component } from "react";

import SideBar from "../../components/side-bar/side-bar.component";

export class apps extends Component {
  constructor() {
    super();
    this.state = {
      auth_token: "",
    };
  }
  render() {
    return (
      <div>
        <SideBar auth_token={this.state.auth_token} />
      </div>
    );
  }
}

export default apps;
