import React from 'react';
import './DashboardSubcomponents.css';
import anatomyImage from '../../assests/pngwing.com.png'; // adjust path based on your component location

// ------------------ 1. HealthStatusCard ------------------
export function HealthStatusCard({ title, status }) {
  const statusClass = status === "Healthy" ? "status-green"
                    : status === "Warning" ? "status-orange"
                    : "status-red";
  return (
    <div className="health-card">
      <div className="health-title">{title}</div>
      <div className={`health-status ${statusClass}`}>{status}</div>
    </div>
  );
}

// ------------------ 2. SimpleAppointmentCard ------------------
export function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <div className="appointment-title">{title}</div>
      <div className="appointment-time">{time}</div>
    </div>
  );
}

// ------------------ 3. CalendarGrid ------------------
export function CalendarGrid() {
  return (
    <div className="calendar-grid">
      <div className="calendar-month">October 2021</div>
      <div className="calendar-days">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div className="calendar-day" key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-slots">
        {[...Array(7)].map((_, idx) => (
          <div key={idx} className="calendar-slot">
            <div className="time-slot">{["10:00", "09:00", "12:00", "11:00", "16:00", "12:00", "09:00"][idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------ 4. AppointmentDetails ------------------
export function AppointmentDetails() {
  return (
    <div className="appointment-details">
      <div className="appointment-item blue">
        <strong>Dentist</strong><br />
        09:00–11:00<br />
        Dr. Cameron Williamson
      </div>
      <div className="appointment-item purple">
        <strong>Physiotherapy</strong><br />
        11:00–12:00<br />
        Dr. Kevin Djones
      </div>
    </div>
  );
}

// ------------------ 5. AnatomicalIllustration ------------------
export function AnatomicalIllustration() {
  return (
    <div className="anatomy-image">
      <img src={anatomyImage} alt="Anatomical" />
    </div>
  );
}

// ------------------ 6. HealthStatusIndicators ------------------
export function HealthStatusIndicators() {
  return (
    <div className="anatomy-indicators">
      <div className="indicator heart">❤️ Healthy Heart</div>
      <div className="indicator leg">🦵 Healthy Leg</div>
    </div>
  );
}

export function BarChart() {
    return (
      <div className="bar-chart">
        <div className="bar" style={{ height: '40px' }}></div>
        <div className="bar" style={{ height: '60px' }}></div>
        <div className="bar" style={{ height: '30px' }}></div>
        <div className="bar" style={{ height: '50px' }}></div>
      </div>
    );
  }