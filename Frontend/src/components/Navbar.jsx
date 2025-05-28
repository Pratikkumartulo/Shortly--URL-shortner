import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import Logout from './Logout';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <nav className="bg-blue-600 px-4 py-3 flex justify-between items-center shadow">
      <Link to="/" className="text-white font-bold text-xl">
        URL Shortener
      </Link>
      <div>
        { !user ?
        <Link to="/auth" className="text-white mx-2 hover:underline">
          Login
        </Link> :
        <Logout/>
        }
      </div>
    </nav>
  );
};

export default Navbar;