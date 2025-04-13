import React, { useState, useEffect } from 'react';
import { FaTrash, FaEye, FaUser } from 'react-icons/fa';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from localStorage when component mounts
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(savedUsers);
  }, []);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const toggleStatus = (userId) => {
    const updatedUsers = users.map(user => 
      user.id === userId 
        ? {...user, status: user.status === 'seen' ? 'unseen' : 'seen'}
        : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="p-8">
     <h2 className="text-2xl font-bold mb-6">Users</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 p-4 bg-gray-100 border-b">
          <div className="font-semibold">Name</div>
          <div className="font-semibold">Email</div>
          <div className="font-semibold">Phone</div>
          <div className="font-semibold">Address</div>
          <div className="font-semibold">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y">
          {users.map(user => (
            <div key={user.id} className="grid grid-cols-5 gap-4 p-4 items-center">
              <div className="flex items-center">
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <FaUser className="text-gray-500" />
                  </div>
                )}
                <span>{`${user.firstName} ${user.lastName}`}</span>
              </div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.address}</div>
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleStatus(user.id)}
                  className={`p-2 rounded-full ${
                    user.status === 'seen' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                  title={user.status === 'seen' ? 'Mark as Unseen' : 'Mark as Seen'}
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="p-2 rounded-full bg-red-100 text-red-600"
                  title="Delete User"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 