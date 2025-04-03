import React, { useState } from "react";
import {
  Box, TextField, InputAdornment, Checkbox, FormControlLabel,
  Grid, Typography, Paper, Radio, List, ListItem, ListItemIcon,
  ListItemText, LinearProgress
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Brush, Campaign, Code, Business, School, MusicNote, FitnessCenter, Palette, CameraAlt, Science } from "@mui/icons-material";


const categories = [
    { name: "Graphic Design", icon: <Brush sx={{ color: "black" }} /> },
    { name: "Digital Marketing", icon: <Campaign sx={{ color: "brown" }} /> },
    { name: "Web Development", icon: <Code sx={{ color: "blue" }} /> },
    { name: "Business Consulting", icon: <Business sx={{ color: "green" }} /> },
    { name: "Education & Training", icon: <School sx={{ color: "purple" }} /> },
    { name: "Music & Audio", icon: <MusicNote sx={{ color: "red" }} /> },
    { name: "Health & Fitness", icon: <FitnessCenter sx={{ color: "orange" }} /> },
    { name: "Art & Illustration", icon: <Palette sx={{ color: "teal" }} /> },
    { name: "Photography & Video", icon: <CameraAlt sx={{ color: "gray" }} /> },
    { name: "Science & Technology", icon: <Science sx={{ color: "darkblue" }} /> }
  ];
  
export default function FilterSection() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 10, px: 3, py: 3, borderRadius: 3, backgroundColor: "#fff", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      
      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        sx={{ backgroundColor: "#f5f5f5", borderRadius: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      
      <Box 
  sx={{ 
    display: "flex", 
    gap: 5, 
    mt: 3, 
    justifyContent: "center", 
    alignItems: "center" 
  }}
>
  <FormControlLabel
    control={<Checkbox sx={{ transform: "scale(1.5)" }} checked={selectedFilter === "category"} onChange={() => handleFilterChange("category")} />}
    label={<Typography sx={{ fontSize: 24, fontWeight: "bold" }}>Category</Typography>}
  />
  <FormControlLabel
    control={<Checkbox sx={{ transform: "scale(1.5)" }} checked={selectedFilter === "budget"} onChange={() => handleFilterChange("budget")} />}
    label={<Typography sx={{ fontSize: 24, fontWeight: "bold" }}>Budget</Typography>}
  />
  <FormControlLabel
    control={<Checkbox sx={{ transform: "scale(1.5)" }} checked={selectedFilter === "location"} onChange={() => handleFilterChange("location")} />}
    label={<Typography sx={{ fontSize: 24, fontWeight: "bold" }}>Location</Typography>}
  />
</Box>


      {/* Category Content */}
      {selectedFilter === "category" && (
        <Paper sx={{ mt: 3, p: 4, borderRadius: 3, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", border: "2px solid #007BFF" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Select a Category</Typography>
          <Grid container spacing={3}>
            {categories.map((category, index) => (
              <Grid item xs={6} key={index}>
                <List>
                  <ListItem button onClick={() => setSelectedCategory(category.name)}>
                    <ListItemIcon>
                      <Radio checked={selectedCategory === category.name} />
                    </ListItemIcon>
                    {category.icon}
                    <ListItemText primary={category.name} sx={{ ml: 1, fontWeight: "bold" }} />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}

      {/* Budget Content */}
      {selectedFilter === "budget" && (
        <Paper sx={{ mt: 3, p: 4, borderRadius: 3, border: "2px solid #007BFF", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold">Daily Progress</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{ width: "85%", height: 12, borderRadius: 3, backgroundColor: "#E0E0E0", "& .MuiLinearProgress-bar": { backgroundColor: "#007BFF", borderRadius: 3 } }}
            />
            <Typography variant="body1" sx={{ ml: 2, fontWeight: "bold" }}>75%</Typography>
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            $76,650 /-
          </Typography>
        </Paper>
      )}

      {/* Location Content */}
      {selectedFilter === "location" && (
        <Paper sx={{ mt: 3, p: 4, borderRadius: 3, border: "2px solid #007BFF", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Location Range</Typography>
          <TextField
            fullWidth
            label="From:"
            variant="filled"
            sx={{ mb: 3, backgroundColor: "#f5f5f5", borderRadius: 2, "& .MuiInputBase-root": { borderRadius: 2 } }}
          />
          <TextField
            fullWidth
            label="To:"
            variant="filled"
            sx={{ backgroundColor: "#f5f5f5", borderRadius: 2, "& .MuiInputBase-root": { borderRadius: 2 } }}
          />
        </Paper>
      )}
    </Box>
  );
}
