import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import { CiGrid41 } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-black text-white fixed">
        {/* Logo */}
        <div className="p-4">
          <img src="/Layer_x0020_1.png" alt="Logo" className="w-40 mx-auto mb-8" />
        </div>

        {/* Menu */}
        <nav className="mt-8">
          <Link 
            to="/dashboard" 
            className={`flex items-center px-6 py-3 ${
              location.pathname === '/dashboard' 
                ? 'bg-black' 
                : 'hover:bg-white hover:text-black transition-colors duration-200'
            }`}
          >
            <CiGrid41 className="mr-3" />
            Dashboard
          </Link>
          <Link 
            to="/users" 
            className={`flex items-center px-6 py-3 ${
              location.pathname === '/users' 
              ? 'bg-black' 
                : 'hover:bg-white hover:text-black transition-colors duration-200'
            }`}
          >
            <FiUser className="mr-3" />
            Users
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full">
      <Header />
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout; 