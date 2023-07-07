import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Navbar_1 from './Navbars';

function App() {
  return (
    <div className="App" style={ {background: '#D39AD7', padding: 3} }>
      <Navbar_1/>
      <Profile/>
    </div>
  );
}

export default App;
