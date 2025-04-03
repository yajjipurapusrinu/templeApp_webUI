import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Chip } from "@mui/material";

function MyBids() {
  const tasks = [
    { category: "Social Media", subCategory: "Marketing", postedDate: "28-12-2024", price: "100,000", color: "blue" },
    { category: "Backend Developer", subCategory: "Fijis", postedDate: "16-12-2024", price: "50,000", color: "orange" },
    { category: "Product Design Internship", subCategory: "Strathy", postedDate: "07-12-2024", price: "80,000", color: "green" },
    { category: "Graphic Design", subCategory: "Marketing", postedDate: "28-12-2024", price: "100,000", color: "red" },
    { category: "Web Development", subCategory: "Strathy", postedDate: "07-12-2024", price: "80,000", color: "purple" },
    { category: "Content Writing & writing", subCategory: "Fijis", postedDate: "16-12-2024", price: "50,000", color: "yellow" },
    { category: "Social Media", subCategory: "Marketing", postedDate: "28-12-2024", price: "100,000", color: "blue" },
    { category: "Backend Developer", subCategory: "Fijis", postedDate: "16-12-2024", price: "50,000", color: "orange" },
    { category: "Product Design Internship", subCategory: "Strathy", postedDate: "07-12-2024", price: "80,000", color: "green" },
    { category: "Graphic Design", subCategory: "Marketing", postedDate: "28-12-2024", price: "100,000", color: "red" },
    { category: "Web Development", subCategory: "Strathy", postedDate: "07-12-2024", price: "80,000", color: "purple" },
    { category: "Content Writing & writing", subCategory: "Fijis", postedDate: "16-12-2024", price: "50,000", color: "yellow" },
  ];

  return (
<Box sx={{ padding: 0 }}>
  <Typography variant="h4" align="center" fontWeight="bold" mb={3} mt={3}>
    My Bids
  </Typography>
  <Grid container spacing={2}>
    {tasks.map((task, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ borderRadius: 2, boxShadow: 1, padding: 2, border: "2px solid #ddd", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="bold">
                Category: {task.category}
              </Typography>
              <Chip label="View" sx={{ bgcolor: "#1976d2", color: "white", fontSize: 14, padding: "5px 10px" }} />
            </Box>
            <Typography variant="body2" color="text.secondary" mt={1} fontWeight={600} fontSize={16}>
              Sub Category: {task.subCategory}
            </Typography>
           
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="body2" color="text.secondary" fontWeight={600} fontSize={16}>
                Posted in: {task.postedDate}
              </Typography>
              <Chip label={task.price} sx={{ bgcolor: task.color, color: "white", fontSize: 16, padding: "10px" }} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

  );
}

export default MyBids;
