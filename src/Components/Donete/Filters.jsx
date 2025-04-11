import React from 'react';
import templeImage from '../../Images/donetShiva.png'; 
import DoneteImage from '../../Images/donete.png'; 
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LogoImage from '../../Images/Kotilinga Temple Logo 1.png';




const RegisterBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0d1117',   // 💥 Set entire page background
        minHeight: '100vh',         // 💥 Make sure it covers full viewport height
        color: 'white',             // Default text color
        px: 4,                      // Optional padding
        py: 4,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 300, sm: 400, md: 500 },
          borderRadius: 2,
          overflow: 'hidden',
        
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={templeImage}
          alt="Temple"
          sx={{
            width: '100%',
            height: '75%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '75%',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography variant="h6" sx={{  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
            Donate Now
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mt: 2 }}>
            Witness the grandeur of Koti Lingas symbolizing eternity and infinite power.
          </Typography>
        </Box>
      </Box>
      <Box
  sx={{
    mb: 4,
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <img
    src={DoneteImage} // Replace with your image path
    alt="Logo"
    style={{
      width: '100%',
      height: '60%',
      // display: '#0d1117',
    }}
  />
</Box>

<Box
      sx={{
        backgroundColor: '#0d1117',
        color: '#fff',
        py: 4,
        px: 3,
        textAlign: 'center',
        mt:10
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          mx: 'auto',
          mb: 2,
        }}
      >
        {/* Left - Logo */}
        <Box sx={{ mb: { xs: 2, md: 0 } }}>
          <img
            src={LogoImage} // Replace with your logo path
            alt="Logo"
            style={{ height: 80 }}
          />
        </Box>

        {/* Center - Navigation Links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ mb: { xs: 2, md: 0 }, flexWrap: 'wrap' }}
        >
          {['Home', 'About', 'Contact', 'Register', 'Log In'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              underline="none"
              sx={{
                color: 'white',
                fontSize: '1.3rem',
                fontWeight: 500,
                '&:hover': { color: '#ccc' },
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        {/* Right - Social Icons */}
        <Stack direction="row" spacing={2}>
  <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
    <FacebookIcon fontSize="large" />
  </IconButton>
  <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
    <InstagramIcon fontSize="large" />
  </IconButton>
  <IconButton href="https://youtube.com" target="_blank" sx={{ color: 'white' }}>
    <YouTubeIcon fontSize="large" />
  </IconButton>
</Stack>
      </Box>

      {/* Bottom Text */}
      <Typography variant="body2" sx={{ fontSize: '1.1rem', mt:10 }}>
        Copyright © 2025 SRI SHAKTIPEETHA KOTI LINGA KSHETHRAM | Designed by
        <Typography component="span" sx={{ color: '#90EE90', ml: 1, fontWeight: 600 }}>
          LEADXPO IT SOLUTIONS
        </Typography>
      </Typography>
    </Box>
      {/* You can place the registration form here if needed */}
    </Box>
  );
};

export default RegisterBanner;
