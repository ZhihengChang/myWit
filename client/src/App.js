import './App.css';
import { Switch, Route } from 'react-router-dom';


import HomePage from './pages/home/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
