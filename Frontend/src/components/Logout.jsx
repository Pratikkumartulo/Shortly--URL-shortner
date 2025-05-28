import React from 'react';
import { useDispatch } from 'react-redux';
import { logout as logoutApi } from '../api/userAuth.api';
import { logout } from '../store/slice/authSlice';
import { useNavigate } from '@tanstack/react-router';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logout());
      navigate({ to: '/' });
    } catch (err) {
      alert('Logout failed.');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
