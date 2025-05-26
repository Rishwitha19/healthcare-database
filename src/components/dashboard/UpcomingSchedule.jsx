// UpcomingSchedule.js
import React from 'react';
import '../../styles/DashboardStyles.css'; 

import { SimpleAppointmentCard } from './DashboardSubcomponents';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" />
      <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" />
      <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" />
      <SimpleAppointmentCard title="Neurologist" time="16:00 PM" />
    </div>
  );
}

export default UpcomingSchedule;
