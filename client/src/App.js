import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home-page.component";
import SignInPage from "./pages/signin/sign-in-page.component";
import friends from "./pages/friends/friends-page.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/friends" component={friends} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
