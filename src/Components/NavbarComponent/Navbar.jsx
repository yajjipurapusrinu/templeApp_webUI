import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Avatar,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import Logo from "../../Images/logo.jpg";

const Navbar = ({ toggleSidebar, hideMenuIcon }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        height: 100, // Increased height for better spacing
        boxShadow: "none",
        zIndex: 1000,
        width: hideMenuIcon ? "calc(100% - 260px)" : "100%",
        transition: "width 0.3s",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
        {/* Left Side: Menu Icon and Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={toggleSidebar} sx={{ fontSize: "3rem" }}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <img src={Logo} alt="Logo" style={{ width: "120px", height: "60px" }} />
        </Box>

        {/* Center: Search Bar */}
        <Box
          sx={{
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            px: 2,
            py: 1,
            display: "flex",
            alignItems: "center",
            width: "15%",
          }}
        >
          <SearchIcon sx={{ mr: 1 }} />
          <InputBase placeholder="Search..." fullWidth />
        </Box>

        {/* Right Side: Links, Notification, and Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            { label: "Home", path: "/home" },
            { label: "Add Task", path: "/add-task" },
            { label: "My Task", path: "/my-tasks" },
            { label: "My Bids", path: "/my-bids" },
            { label: "Filter", path: "/filters" },
          ].map((item) => (
            <Typography
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            sx={{
              cursor: "pointer",
              fontWeight: "bold", // Always bold
              color: location.pathname === item.path ? "#1B88CA" : "black", // Active color
              fontSize: "1 rem",
              transition: "color 0.3s ease",
            }}
          >
            {item.label}
          </Typography>
          

          ))}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon sx={{ fontSize: "2rem" }} />
            </Badge>
          </IconButton>
          <Avatar alt="Profile" src="/path/to/profile.jpg" sx={{ width: 50, height: 50 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
