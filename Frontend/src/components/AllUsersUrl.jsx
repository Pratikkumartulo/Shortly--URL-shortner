import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsersUrs } from '../api/getUserUrls';
import axiosInstance from '../utils/axiosInstance';

const AllUsersUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getUsersUrs,
    refetchInterval:30000,
    staleTime: 1000 * 60,
  });
  
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md h-full flex items-center justify-center">
        <div className="text-gray-500">Loading your URLs...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md h-full">
        <div className="text-red-500 p-4 bg-red-50 rounded-lg">
          Error: {error.message || 'Failed to load URLs'}
        </div>
      </div>
    );
  }

  if (!urls || urls.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center justify-center">
        <div className="text-gray-500 mb-2">You haven't created any URLs yet.</div>
        <p className="text-sm text-gray-400">Your shortened URLs will appear here</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your URLs</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="hidden sm:table-header-group">
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Original URL</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Short URL</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Clicks</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {urls.reverse().map((url) => (
              <tr key={url._id} className="border-b hover:bg-gray-50 flex flex-col sm:table-row">
                <td className="px-4 py-3 truncate max-w-xs">
                  <div className="sm:hidden font-medium text-xs text-gray-500 mb-1">Original URL:</div>
                  <a href={url.full_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    {url.full_url}
                  </a>
                </td>
                <td className="px-4 py-3">
                  <div className="sm:hidden font-medium text-xs text-gray-500 mb-1">Short URL:</div>
                  <div className="flex items-center">
                    <a 
                      href={url.short_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {url.short_url.split('/').pop()}
                    </a>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="sm:hidden font-medium text-xs text-gray-500 mb-1">Clicks:</div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {url.clicks || 0}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="sm:hidden font-medium text-xs text-gray-500 mb-1">Actions:</div>
                  <button
                    onClick={() => handleCopy(url.short_url, url._id)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors duration-300 ${
                      copiedId === url._id ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
                  >
                    {copiedId === url._id ? 'Copied!' : 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersUrl;