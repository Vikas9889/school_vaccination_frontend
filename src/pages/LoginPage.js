// src/pages/LoginPage.js
import React from 'react';
import Login from '../components/Login';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <h1>School Vaccination Portal</h1>
      <Login onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
