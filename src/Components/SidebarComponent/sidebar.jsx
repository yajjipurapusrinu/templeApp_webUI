import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  Task as TaskIcon,
  ListAlt as ListAltIcon,
  Gavel as GavelIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Payment as PaymentIcon,
  HelpOutline as HelpIcon,
  ChevronRight as RightArrowIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/home" },
    { text: "Add Task", icon: <TaskIcon />, path: "/add-task" },
    { text: "All Task", icon: <ListAltIcon />, path: "/all-tasks" },
    { text: "My Bids", icon: <GavelIcon />, path: "/my-bids" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "App Settings", icon: <SettingsIcon />, path: "/app-settings" },
    { text: "Transactions", icon: <PaymentIcon />, path: "/transactions" },
    { text: "Help & Support", icon: <HelpIcon />, path: "/help-support" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        backgroundColor: "#fff",
        boxShadow: "5px 0 10px rgba(44, 13, 156, 0.1)",
        transition: "width 0.3s",
        borderRight: "3px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Profile Section */}
      <Box sx={{ p: 2, textAlign: "center", display: "flex", alignItems: "center" }}>
        <Avatar src="/path/to/profile.jpg" sx={{ width: 50, height: 50, mr: 2 }} />
        <Typography fontWeight="bold" fontSize="16px">John Doe</Typography>
      </Box>

      <Divider />

      {/* Sidebar Menu with Spacing */}
      <List sx={{  gap: 2, display: "flex", flexDirection: "column" }}> {/* Added gap here */}
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleNavigate(item.path)}
            sx={{
              py: 1.5,
              backgroundColor: location.pathname === item.path ? "#1B88CA" : "transparent",
              color: location.pathname === item.path ? "white" : "black",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#5AAFE6",
                color: "white",
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === item.path ? "white" : "black" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ fontWeight: "bold" }} /> {/* Bold text */}
            <RightArrowIcon sx={{ color: location.pathname === item.path ? "white" : "black" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
