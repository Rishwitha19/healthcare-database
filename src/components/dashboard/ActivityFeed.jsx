// ActivityFeed.js
import React from 'react';
import '../../styles/DashboardStyles.css';
import { BarChart } from './DashboardSubcomponents';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <p>3 appointments on this week</p>
      <BarChart />
    </div>
  );
}

export default ActivityFeed;
