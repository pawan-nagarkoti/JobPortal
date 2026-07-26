import React from "react";
import { NavLink } from "react-router-dom";
import useUI from "../../../context/UIcontext";

const Sidebar = () => {
  const menuItems = [
    { id: "profile", label: "Employers Profile", icon: "user", url: "/employer/profile" },
    { id: "post", label: "Post a Job", icon: "plus-circle", url: "/employer-job-post" },
    { id: "jobs", label: "My Jobs", icon: "briefcase", url: "/employer/job-list" },
    { id: "saved", label: "Saved Candidate", icon: "bookmark", url: "/employer/bookmark-candidate" },
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

  const { logout } = useUI();

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

      {/* Logout at bottom */}
      <div className="absolute bottom-6 left-6">
        <div
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer"
          onClick={logout}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Log-out
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
