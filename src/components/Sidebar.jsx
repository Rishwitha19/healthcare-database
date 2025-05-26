import React from 'react';
import sidebarLinks from '../data/sidebarLinks';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">
        <span className="health-blue">Health</span><span className="care-black">care</span><span className="dot">.</span>
      </h1>

      <div className="nav-section">
        <p className="nav-heading">General</p>
        <ul className="nav-links">
          {sidebarLinks.general.map((link, index) => (
            <li className="nav-item" key={index}>
              <span className="icon">{link.icon}</span>
              <span className="label">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section bottom-section">
        <p className="nav-heading">Tools</p>
        <ul className="nav-links">
          {sidebarLinks.tools.slice(0, -1).map((link, index) => (
            <li className="nav-item" key={index}>
              <span className="icon">{link.icon}</span>
              <span className="label">{link.name}</span>
            </li>
          ))}
        </ul>
        <ul className="nav-links setting-bottom">
          <li className="nav-item">
            <span className="icon">{sidebarLinks.tools.at(-1).icon}</span>
            <span className="label">{sidebarLinks.tools.at(-1).name}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
