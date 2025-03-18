import { useState } from "react";
import { Button, Typography, Box, Grid, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../Images/laginpageImage.jpg";
import Logo from "../../Images/logo.jpg";

const EmailLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check for valid credentials (You can replace this with API call)
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("token", "userToken"); // Storing token
      navigate("/home"); // Redirect to Layout Page
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome Back!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Enter to unlimited access to data & information
          </Typography>

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography variant="body2" sx={{ textAlign: "center", mt: 6 }}>
            Create New Account?{" "}
            <span style={{ color: "#007bff", cursor: "pointer" }}>Sign up</span>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={false} sm={4} md={6} sx={{ p: 0 }}>
        <div
          style={{
            backgroundImage: `url(${LoginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f5f5f5",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "25px",
            height: "95%",
            width: "85%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default EmailLoginPage;
