import React, { Component } from "react";

import SideBar from "../../components/side-bar/side-bar.component";

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
      </div>
    );
  }
}

export default apps;
