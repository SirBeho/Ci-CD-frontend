// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Users from './pages/Users';

import './App.css';

function App({children}) {
  return (
    <Router>
      <div className="App h-full max-h-screen" >
        <Navbar />
        <div className="mx-auto">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
