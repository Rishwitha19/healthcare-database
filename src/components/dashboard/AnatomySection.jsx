// AnatomySection.js
import React from 'react';
import '../../styles/DashboardStyles.css';
import { AnatomicalIllustration, HealthStatusIndicators } from './DashboardSubcomponents';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <AnatomicalIllustration />
      <HealthStatusIndicators />
    </div>
  );
}

export default AnatomySection;
