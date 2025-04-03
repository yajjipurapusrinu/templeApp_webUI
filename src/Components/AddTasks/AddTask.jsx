import React, { useState } from "react";
import { Box, Button, MenuItem, Select, TextField, Typography, Paper, Grid } from "@mui/material";
import { Description, Image, PictureAsPdf } from "@mui/icons-material";

const TaskManager = () => {
  const [taskType, setTaskType] = useState("");

  const documentTypes = [
    { name: "Leadxpo Document File", icon: <Description fontSize="large" />, color: "#E3F2FD" },
    { name: "Leadxpo Images File", icon: <Image fontSize="large" />, color: "#E8F5E9" },
    { name: "Leadxpo PDF File", icon: <PictureAsPdf fontSize="large" />, color: "#FFEBEE" },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Page Title */}
      <Typography variant="h4" align="center"   fontWeight="bold" mb={3} mt={3}>
        Add Tasks
      </Typography>

      {/* Task Form Section */}
      <Box sx={{ maxWidth: "100%", mx: "auto", p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
        {/* Task Type Dropdown */}
        <Select
          fullWidth
          multiline rows={2}
          variant="outlined"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          displayEmpty
          sx={{ mb: 2 }}
        >
          <MenuItem value="" disabled>
            Task Type
          </MenuItem>
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Plumber Work">Plumber Work</MenuItem>
          <MenuItem value="Delivery">Delivery</MenuItem>
          <MenuItem value="Electronic Repair">Electronic Repair</MenuItem>
        </Select>

        {/* Input Fields */}
        <TextField fullWidth label="Category" variant="outlined" multiline rows={2} sx={{ mb: 2 }} />
        <TextField fullWidth label="Posted In" type="date" variant="outlined" multiline rows={2} sx={{ mb: 2 }} />
        <TextField fullWidth label="Amount" variant="outlined" type="number" multiline rows={2} sx={{ mb: 2 }} />
        <TextField fullWidth label="Phone Number" variant="outlined" type="tel" multiline rows={2} sx={{ mb: 2 }} />
        <TextField fullWidth label="Description" multiline rows={5} variant="outlined" sx={{ mb: 2 }} />

        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Documents
        </Typography>

        {/* Document Cards */}
        <Grid container spacing={5} justifyContent="center">
          {documentTypes.map((doc, index) => (
            <Grid item key={index}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 400,
                  height: 100,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: doc.color,
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)", boxShadow: 6 },
                }}
              >
                {doc.icon}
                <Typography fontWeight="bold" mt={1}>
                  {doc.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Submit Button */}
        <Box mt={10} align="center">
          <Button variant="contained" color="primary" sx={{ fontSize: "30px", fontWeight: "bold", px: 4, py: 1.5 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  return <TaskManager />;
};

export default App;
