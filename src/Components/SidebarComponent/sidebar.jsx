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
  ExitToApp as LogoutIcon,
  ChevronRight as RightArrowIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/home" },
    { text: "Add Task", icon: <TaskIcon />, path: "/add-task" },
    { text: "All Task", icon: <ListAltIcon />, path: "/all-tasks" },
    { text: "My Bids", icon: <GavelIcon />, path: "/my-bids" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "App Settings", icon: <SettingsIcon />, path: "/app-settings" },
    { text: "Transactions", icon: <PaymentIcon />, path: "/transactions" },
    { text: "Help & Support", icon: <HelpIcon />, path: "/help-support" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#fff",
        boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
        transition: "width 0.3s",
      }}
    >
      <Box sx={{ p: 2, textAlign: "center", display: "flex", alignItems: "center" }}>
  <Avatar src="/path/to/profile.jpg" sx={{ width: 50, height: 50, mr: 2 }} />
  <Typography fontWeight="bold" fontSize="16px">John Doe</Typography>
</Box>


      <Divider />

      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} sx={{ py: 1.5 }} onClick={() => handleNavigate(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            <RightArrowIcon />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
