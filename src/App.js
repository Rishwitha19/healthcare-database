import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

function App() {
  return (
    <div className="app-container">
  <Sidebar />
  <div className="main-content">
    <Header />
    <DashboardMainContent />
  </div>
</div>

  );
}

export default App;
