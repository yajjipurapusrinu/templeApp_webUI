import React from 'react'
import HomeImage from "../../Images/home.jpg";
import HomeLogo from "../../Images/logo.jpg";
import { Grid, Card, CardContent, Typography, Box, Chip ,Link,IconButton} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";


function HomepageComponent() {

    const tasks = [
        { category: "Social Media", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "blue" },
        { category: "Backend Developer", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "orange" },
        { category: "Product Design Internship", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "green" },
        { category: "Graphic Design", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "red" },
        { category: "Web Development", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "purple" },
        { category: "Content Writing & Copywriting", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "yellow" },
        { category: "Freelance IT & Software Development", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "blue" },
        { category: "App Development (iOS, Android)", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "orange" },
        { category: "Technical Writing", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "green" },
        { category: "Social Media", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "blue" },
        { category: "Backend Developer", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "orange" },
        { category: "Product Design Internship", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "green" },
        { category: "Graphic Design", subCategory: "Marketing", postedDate: "28-12-2024", daysLeft: "2d Left", price: "100,000", color: "red" },
        { category: "Web Development", subCategory: "Strathy", postedDate: "07-12-2024", daysLeft: "9d Left", price: "80,000", color: "purple" },
        { category: "Content Writing & Copywriting", subCategory: "Fijis", postedDate: "16-12-2024", daysLeft: "7d Left", price: "50,000", color: "yellow" },
      ];
      

  return (
    <div>
    
    <img 
      src={HomeImage} 
      alt="Home" 
      style={{ width: "100%",  height: "auto", borderRadius: "10px" }} 
    />




<Box sx={{ padding: 0 }}>
  <Typography variant="h4" align="center" fontWeight="bold" mb={3} mt={3}>
    All Tasks
  </Typography>
  <Grid container spacing={2}>
    {tasks.map((task, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ borderRadius: 2, boxShadow: 1, padding: 2, border: "2px solid #ddd",  display: "flex", flexDirection: "column" }}>
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


<Box sx={{ backgroundColor: "#f8f9fa", p: 4, mt: 5 }}>
  <Grid container spacing={4}>
    {/* Left Section */}
    <Grid item xs={12} md={2}>
    <img 
      src={HomeLogo} 
      alt="Logo" 
      style={{ width: "100px",  height: "auto", borderRadius: "10px" }} 
    />
      <Box display="flex" alignItems="center" mt={2}>
        <IconButton color="primary">
          <LanguageIcon />
        </IconButton>
        <Typography fontWeight="bold">India / English</Typography>
      </Box>
      <Box display="flex" alignItems="center" fontWeight="bold" mt={2}>
        <IconButton color="primary">
          <HelpOutlineIcon />
        </IconButton>
        <Typography fontWeight="bold">Help & Support</Typography>
      </Box>
      <Box display="flex" alignItems="center" fontWeight="bold" mt={2}>
        <IconButton color="primary">
          <AccessibilityNewIcon />
        </IconButton>
        <Typography fontWeight="bold">Accessibility</Typography>
      </Box>
    </Grid>

    {/* Categories Section */}
    <Grid item xs={12} md={2}>
      <Typography variant="h6" color="primary" fontWeight="bold">Categories</Typography>
      {['Projects', 'Contests', 'Freelancers', 'Enterprise', 'AI Development', 'Membership','Preperred','Frelancer','Program','Project'].map((item) => (
        <Typography key={item} mt={2} fontWeight="bold">
          <Link href="#" color="inherit" underline="hover">{item}</Link>
        </Typography>
      ))}
    </Grid>

    {/* About Section */}
    <Grid item xs={12} md={2}>
      <Typography variant="h6" color="primary" fontWeight="bold">About</Typography>
      {['About us', 'How it Works', 'Security', 'Investor', 'Sitemap', 'Stories'].map((item) => (
        <Typography key={item} mt={2} fontWeight="bold">
          <Link href="#" color="inherit" underline="hover">{item}</Link>
        </Typography>
      ))}
    </Grid>

    {/* Terms Section */}
    <Grid item xs={12} md={2}>
      <Typography variant="h6" color="primary" fontWeight="bold">Terms</Typography>
      {['Privacy Policy', 'Terms and Conditions', 'Copyright Policy', 'Code of Conduct', 'Fees and Charges'].map((item) => (
        <Typography key={item} mt={2} fontWeight="bold">
          <Link href="#" color="inherit" underline="hover">{item}</Link>
        </Typography>
      ))}
    </Grid>

    {/* Partners Section */}
    <Grid item xs={12} md={2}>
      <Typography variant="h6" color="primary" fontWeight="bold">Partners</Typography>
      {['Escrow.com', 'Load Shift', 'Warrior Forum'].map((item) => (
        <Typography key={item} mt={2}fontWeight="bold">
          <Link href="#" color="inherit" underline="hover">{item}</Link>
        </Typography>
      ))}
    </Grid>

    {/* Apps Section beside Partners Section */}
    <Grid item xs={12} md={2}>
      <Typography variant="h6" color="primary" fontWeight="bold" align="center">Apps</Typography>
      <Box mt={2}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/016/290/534/small_2x/google-play-apple-store-logo-icon-button-free-vector.jpg" alt="App Store" width="250" />
      </Box>
      {/* <Box mt={2}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/256px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" width="150" />
      </Box> */}
    </Grid>
  </Grid>
</Box>


    <Box sx={{ backgroundColor: "#1783c7", py: 4, px: 2 ,mt:1}}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold" color="white">
            78,598,389
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="white">
            Registered Users
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold" color="white">
            24,412,271
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="white">
            Total Jobs Posted
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </Typography>
        </Grid>
      </Grid>
    </Box>




  </div>
  )
}

export default HomepageComponent