import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Rockets from './components/rockets';
import Missions from './components/missions';
import MyProfile from './components/profile';

function App() {
  return (
    <>
      <nav>
        <h1>Space Travelers Hub</h1>
        <ul>
          <li><NavLink className="Rockets" to="/">Rockets</NavLink></li>
          <li><NavLink className="Missions" to="/missions">Missions</NavLink></li>
          <li><NavLink className="Profile" to="/profile">My Profile</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
