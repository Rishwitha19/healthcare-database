
import {
  LayoutDashboard,
  History,
  CalendarDays,
  ClipboardList,
  BarChart2,
  FlaskConical,
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';

const sidebarLinks = {
  general: [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "History", icon: <History size={18} /> },
    { name: "Calendar", icon: <CalendarDays size={18} /> },
    { name: "Appointments", icon: <ClipboardList size={18} /> },
    { name: "Statistics", icon: <BarChart2 size={18} /> },
    { name: "Tests", icon: <FlaskConical size={18} /> }
  ],
  tools: [
    { name: "Chat", icon: <MessageSquare size={18} /> },
    { name: "Support", icon: <LifeBuoy size={18} /> },
    { name: "Setting", icon: <Settings size={18} /> }
  ]
};

export default sidebarLinks;
