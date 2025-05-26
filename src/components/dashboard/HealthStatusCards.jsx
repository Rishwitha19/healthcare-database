// HealthStatusCards.js
import React from 'react';
import '../../styles/DashboardStyles.css';
import { HealthStatusCard } from './DashboardSubcomponents';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      <HealthStatusCard title="Lungs" status="Warning" />
      <HealthStatusCard title="Teeth" status="Healthy" />
      <HealthStatusCard title="Bone" status="Issue" />
    </div>
  );
}
export default HealthStatusCards;