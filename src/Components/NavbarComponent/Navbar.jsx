import { useNavigate } from "react-router-dom";
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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        height: 100,
        boxShadow: "none",
        zIndex: 1000,
        width: hideMenuIcon ? "calc(100% - 250px)" : "calc(100% - 0px)",
        transition: "width 0.3s",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side: Menu Icon and Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={toggleSidebar} sx={{ fontSize: "2.5rem" }}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <img src={Logo} alt="Logo" style={{ width: "100px", height: "50px" }} />
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Typography sx={{ cursor: "pointer" }} onClick={() => handleNavigation("/home")}>Home</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={() => handleNavigation("/add-task")}>Add Task</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={() => handleNavigation("/my-tasks")}>My Task</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={() => handleNavigation("/my-bids")}>My Bids</Typography>
          <Typography sx={{ cursor: "pointer" }} onClick={() => handleNavigation("/filters")}>Filter</Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Profile" src="/path/to/profile.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
