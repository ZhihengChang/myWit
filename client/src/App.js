import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage.component";
import Search from "./components/user/Search";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Search />
    </div>
  );
}

export default App;
