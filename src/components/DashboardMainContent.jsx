
import React from "react";
import DashboardOverview from "./dashboard/DashboardOverview";
import AnatomySection from "./dashboard/AnatomySection";
import HealthStatusCards from "./dashboard/HealthStatusCards";
import CalendarView from "./dashboard/CalendarView";
import UpcomingSchedule from "./dashboard/UpcomingSchedule";
import ActivityFeed from "./dashboard/ActivityFeed";
import "../styles/DashboardMainContent.css";


function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-body">
        <div className="left-panel">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className="right-panel">
          <CalendarView />
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;
