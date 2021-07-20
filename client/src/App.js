import "./App.css";
import { Switch, Route } from "react-router-dom";
import * as Storage from './util/storage';

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
      authToken: Storage.getStateFromSession('authToken') || '',
      currentUser: Storage.getStateFromSession('currentUser') || null,
    }
  }

  handleAuthentication = (token, user) => {
    this.setState({ authToken: token }, 
      Storage.storeStateInSession('authToken', token)
    );
    this.setState({ authToken: token },
      Storage.storeStateInSession('currentUser', user)
    );
  }

  render(){
    return (
      <div className="App">
        <Switch>

          <Route exact path="/" 
            render={(props) => 
              <HomePage {...props} 
                authToken={this.state.authToken}
                handleAuthentication = {this.handleAuthentication}
              />
            } 
          /> 
          
          <Route path="/friends" 
            render={(props) => 
              <FriendPage {...props} 
                authToken={this.state.authToken}
                handleAuthentication = {this.handleAuthentication}
              />
            }  
          />
          
          <Route path="/me"
            render={(props) => 
              <ProfilePage {...props} 
                authToken={this.state.authToken}
              />
            } 
          />
          
          <Route path="/moment" 
            render={(props) => 
              <MomentPage {...props} 
                authToken={this.state.authToken}
                currentUser={this.state.currentUser}
                handleAuthentication = {this.handleAuthentication}
              /> 
            } 
          />

          <Route path="/apps" 
            render={(props) => 
              <AppPage {...props} 
                authToken={this.state.authToken}
              />
            } 
          />
          
          <Route path="/signin" 
            render={(props) => 
              <SignInPage {...props} 
                handleAuthentication = {this.handleAuthentication} 
              /> 
            } 
          />
          
          
          <Route path="/register"
            render={(props) => 
              <SignUpPage {...props} 
                handleAuthentication = {this.handleAuthentication} 
              />
            } 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
