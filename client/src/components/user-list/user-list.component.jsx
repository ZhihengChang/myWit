import React, { Component } from "react";
import UserItem from "../user-block/user-block.component";
import Spinner from "../../pages/Spinner";

export class User extends Component {
  state = {
    user: [
      {
        id: "1",
        login: "ryan",
        avatar_url:
          "https://robohash.org/ffc146ee01feb25d322525b75d8d7ab8?set=set3&bgset=&size=400x400",
      },
      {
        id: "2",
        login: "yihao",
        avatar_url:
          "https://robohash.org/ffc146ee01feb25d322525b75d8d7ab8?set=set3&bgset=&size=400x400",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.user.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem",
};

export default User;
