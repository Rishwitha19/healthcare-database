// CalendarView.js
import React from 'react';
import '../../styles/DashboardStyles.css';
import { CalendarGrid, AppointmentDetails } from './DashboardSubcomponents';

function CalendarView() {
  return (
    <div className="calendar-view">
      <CalendarGrid />
      <AppointmentDetails />
    </div>
  );
}

export default CalendarView;