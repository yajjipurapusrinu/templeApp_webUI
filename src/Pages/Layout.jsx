import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/NavbarComponent/Navbar";
import Sidebar from "../Components/SidebarComponent/sidebar";

const Layout = () => {
  const location = useLocation();

  const [openSidebar, setOpenSidebar] = useState(false); // Default sidebar hidden

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: openSidebar ? "250px" : "0px",
          transition: "width 0.3s",
          overflow: "hidden",
          position: openSidebar ? "fixed" : "relative",
          zIndex: 1000,
          height: "100vh",
        }}
      >
        <Sidebar />
      </div>

      {/* Navbar and Main Content */}
      <div
        style={{
          flex: 1,
          transition: "margin-left 0.3s",
          marginLeft: openSidebar ? "250px" : "0px",
          width: openSidebar ? "calc(100% - 250px)" : "100%",
        }}
      >
        <Navbar toggleSidebar={toggleSidebar} hideMenuIcon={openSidebar} />
        <div style={{ padding: "20px", marginTop: "100px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
