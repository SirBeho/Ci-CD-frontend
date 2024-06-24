// src/components/Navbar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 h-24 fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold">Logo</h1>
          </div>
          <div className="flex space-x-8">
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
            <Link to="/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
            <Link to="/users" className="text-white hover:text-gray-300">
              Users
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
