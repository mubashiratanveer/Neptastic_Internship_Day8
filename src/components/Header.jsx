import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const { user } = useAuth();
  
  // Extract username from email (part before @)
  const getUsernameFromEmail = (email) => {
    if (!email) return '';
    return email.split('@')[0];
  };

  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      {/* Search Section */}
      <div className="flex items-center w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="text-right mr-3">
            <p className="font-semibold text-gray-800">{getUsernameFromEmail(user?.email)}</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <img
            src={user?.photoURL || "data:image/png;base64,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"}
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <FaChevronDown className="text-gray-500 ml-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header; 