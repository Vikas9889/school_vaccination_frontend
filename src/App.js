// src/App.js
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (fakeToken) => {
    setToken(fakeToken);
  };

  return (
    <div className="App">
      {token ? <DashboardPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
