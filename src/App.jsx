import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/users" element={
            <Layout>
              <Users />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


