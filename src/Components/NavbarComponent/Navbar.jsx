// Navbar.jsx
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";


import Logo from "../../Images/Kotilinga Temple Logo 1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(localStorage.getItem("userData"));

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    setUserData(storedUserData);
  }, []);

console.log("++++++++++++++++>",userData)

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/home");
  };

  const handleProfileNavigate = () => {
    navigate("/profile");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Register", path: "/register" },
    { label: "Login", path: "/login" },
    { label: "Donate", path: "/donete" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          height: 120,
          boxShadow: "none",
          zIndex: 1000,
          transition: "width 0.3s",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <img src={Logo} alt="Logo" style={{ height: "70px" }} />
            <p style={{ fontSize: "20px" }}>శ్రీ శక్తిపీఠ కోటి లింగ క్షేత్రం</p>
          </Box>

          {/* Navigation + Avatar/Chip */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navLinks.map((item) => (
              <Typography
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  cursor: "pointer",
                  color: location.pathname === item.path ? "#FFD700" : "#fff",
                  fontSize: "1.2rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#FFD700",
                  },
                
                }}
              >
                {item.label}
              </Typography>
            ))}

            {/* Profile Chip or Avatar */}
            {userData ? (
              <Chip
                label={userData?.userName || "Profile"}
                avatar={
                  <Avatar
                    src={
                      userData?.image
                        ? `http://localhost:3001/storage/userdp/${userData.profilePic}`
                        : ""
                    }
                    alt="Profile"
                    sx={{ width: 40, height: 40 }}
                  />
                }
                onClick={handleProfileNavigate}
                variant="outlined"
                sx={{ cursor: "pointer", backgroundColor: "white" }}
              />
            ) : (
              <Avatar sx={{ bgcolor: "gray" }} />
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content space */}
      <Box sx={{ pt: "130px", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Navbar;
