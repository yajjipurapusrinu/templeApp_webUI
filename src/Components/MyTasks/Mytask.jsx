import React from 'react'
import { Grid, Card, CardContent, Typography, Box, Chip ,Link,IconButton} from "@mui/material";


function Mytask() {



    const tasks = [
        { category: "Social Media", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "blue" },
        { category: "Backend Developer", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "orange" },
        { category: "Product Design Internship", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "green" },
        { category: "Graphic Design", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "red" },
        { category: "Web Development", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "purple" },
        { category: "Content Writing & Copywriting", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "yellow" },
        { category: "Freelance IT &  Development", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "blue" },
        { category: "App Development (iOS, Android)", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "orange" },
        { category: "Technical Writing", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "green" },
        { category: "Social Media", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "blue" },
        { category: "Backend Developer", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "orange" },
        { category: "Product Design ", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "green" },
        { category: "Graphic Design", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "red" },
        { category: "Web Development", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "purple" },
        { category: "Content Writing & writing", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "yellow" },
      ];
      






  return (
    <Box sx={{ padding: 0 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={3} mt={10}>
        My Tasks
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
                  <Typography variant="body2" color="text.secondary">
                    {task.daysLeft}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mt={1} fontWeight={600} fontSize={16}>
                  Sub Category: {task.subCategory}
                </Typography>
               
              <Box display="flex" justifyContent="space-between" >
              <Typography variant="body2" color="text.secondary" mt={1} fontWeight={600} fontSize={16}>
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
    
  )
}

export default Mytask