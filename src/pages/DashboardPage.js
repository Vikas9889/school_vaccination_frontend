// src/pages/DashboardPage.js
import React from 'react';
import Dashboard from '../components/Dashboard';
import Drives from '../components/Drives';
import Students from '../components/Students';

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
      <Drives />
      <Students />
    </div>
  );
};

export default DashboardPage;
