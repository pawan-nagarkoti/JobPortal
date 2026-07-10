import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { id: "profile", label: "Employers Profile", icon: "user", url: "/employer/profile" },
    { id: "post", label: "Post a Job", icon: "plus-circle", url: "/employer-job-post" },
    { id: "jobs", label: "My Jobs", icon: "briefcase", url: "/employer/job-list" },
    { id: "saved", label: "Saved Candidate", icon: "bookmark", url: "/employer/bookmark-candidate" },
    { id: "settings", label: "Settings", icon: "settings", url: "/employer-setting" },
  ];

  const getIcon = (iconName) => {
    const icons = {
      layers: <span>📋</span>,
      user: <span>👤</span>,
      "plus-circle": <span>➕</span>,
      briefcase: <span>💼</span>,
      bookmark: <span>🔖</span>,
      settings: <span>⚙️</span>,
    };

    return icons[iconName] || null;
  };

  return (
    <aside className="min-h-screen w-64 border-r border-gray-200 bg-white">
      <div className="p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">Employers Dashboard</p>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={({ isActive }) =>
                `flex items-center rounded-lg px-4 py-3 transition ${
                  isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              {getIcon(item.icon)}
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
