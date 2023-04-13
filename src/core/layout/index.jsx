import React, { useState } from "react";

// Layout Components
import LayoutNavbar from "./navbar";
import LayoutSidebar from "./sidebar";
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout min-h-screen flex relative bg-white">
      <LayoutSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-col w-full">
        <LayoutNavbar setSidebarOpen={setSidebarOpen} />
        <div className="content px-6 lg:px-12 py-12">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
