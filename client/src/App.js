import './App.css';

import HomePage from './pages/home/homepage.component';
import SidebarOption from './components/side-bar-option/side-bar-option.component';

function App() {
  return (
    <div>
      <HomePage />
      <SidebarOption label='Moment' api='#'/>
    </div>
  );
}

export default App;
