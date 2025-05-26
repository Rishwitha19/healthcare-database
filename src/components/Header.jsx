import React from 'react';
import { Bell, Plus, Search, User } from 'lucide-react';
import '../styles/Header.css'; // adjust path if needed


function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-text">Healthcare<span className="dot">.</span></span>
      </div>
      <div className="header-actions">
        <SearchBar />
        <NotificationIcon icon={<Bell size={20} />} />
        <UserProfile icon={<User size={20} />} />
        <AddButton icon={<Plus size={20} />} />
      </div>
    </header>
  );
}

// === Inline Subcomponents ===

function SearchBar() {
  return (
    <div className="search-bar">
      <Search size={18} />
      <input type="text" placeholder="Search..." disabled />
    </div>
  );
}

function NotificationIcon({ icon }) {
  return <div className="notification-icon">{icon}</div>;
}

function UserProfile({ icon }) {
  return (
    <div className="user-profile">
      {icon}
      <span className="user-name">Dr. John</span>
    </div>
  );
}

function AddButton({ icon }) {
  return <div className="add-button">{icon}</div>;
}

export default Header;
