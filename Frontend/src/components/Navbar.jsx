import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import Logout from './Logout';

const Navbar = () => {
  // Local state to track authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Get user from Redux store
  const { user, isLoggedin } = useSelector((state) => state.user);
  
  // Update local state when Redux state changes
  useEffect(() => {
    console.log("State",user,isLoggedin)
    setIsAuthenticated(isLoggedin && user);
  }, [user, isLoggedin]);
  
  return (
    <nav className="bg-blue-600 px-4 py-3 flex justify-between items-center shadow">
      <Link to="/" className="text-white font-bold text-xl">
        URL Shortener
      </Link>
      <div>
        {!isAuthenticated ? (
          <Link to="/auth" className="text-white mx-2 hover:underline">
            Login
          </Link>
        ) : (
          <Logout />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
