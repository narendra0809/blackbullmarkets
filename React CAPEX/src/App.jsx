import React from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import WelcomeSection from './components/WelcomeSection';
import Market from './components/Market';

const App = () => {
  return (
    <div className="app-container">
      <div className="main-sections">
        <div className="login-section">
          <LoginForm />
        </div>
        <div className="welcome-section">
          <WelcomeSection />
        </div>
      </div>
      <div className="market-section">
        <Market />
      </div>
    </div>
  );
};

export default App;
