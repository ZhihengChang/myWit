import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home-page.component";
import SignInPage from "./pages/signin/sign-in-page.component";
import SignUpPage from "./pages/signup/sign-up-page.component";
import MomentPage from "./pages/moment/moment-page.component";
import FriendPage from "./pages/friends/friends-page.component";
import ProfilePage from "./pages/profile/userProfile";
import AppPage from "./pages/apps/apps";
import React from "react";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      authToken: null,
      currentUser: null
    }
  }

  componentDidMount() {

  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/friends" component={FriendPage} />
          <Route path="/me" component={ProfilePage} />
          <Route path="/moment" component={MomentPage} />
          <Route path="/apps" component={AppPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/register" component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
