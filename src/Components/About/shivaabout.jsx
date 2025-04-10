import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import SivaImage from '../../Images/lord-shiva.jpg';


const HistorySection = () => {
  return (
    <Box sx={{ backgroundColor: '#0a0f0f', color: 'white', py: 8, px: { xs: 2, md: 10 } }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Side Image */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 5,
              bgcolor: '#121212',
            }}
          >
            <CardMedia
              component="img"
              image={SivaImage} // Replace this with actual image path
              alt="Lord Shiva"
              sx={{ height: '100%', objectFit: 'cover' }}
            />
          </Card>
        </Grid>

        {/* Right Side Content */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="subtitle1" sx={{ color: '#f97316', fontWeight: 'bold', mb: 1 }}>
              History
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontFamily: 'serif',
                lineHeight: 1.2,
              }}
            >
              Established in 2025
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#d1d5db',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                maxWidth: '95%',
              }}
            >
              At Sri Shaktipeetha Koti Linga Kshethram, we believe in fostering a deep spiritual
              connection with Lord Shiva through ancient rituals, Vedic practices, and devotional
              services. Our temple is home to a million Shiva Lingas, each installed with sacred
              prayers and divine energy. Our mission is to provide a serene space for devotees to
              meditate, seek blessings, and experience the ultimate connection with the divine.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HistorySection;
