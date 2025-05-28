import React from 'react';
import Url_form from '../components/url_form';
import AllUsersUrl from '../components/AllUsersUrl';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const {user} = useSelector((state) => state.user);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.user.name || 'User'}</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="order-1 lg:order-1">
            <Url_form />
          </div>
          <div className="order-2 lg:order-2 mt-6 lg:mt-0">
            <AllUsersUrl />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;