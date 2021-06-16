import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage.component";
import friends from "./pages/friends/friends";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/friends" component={friends} />
      </Switch>
    </div>
  );
}

export default App;
