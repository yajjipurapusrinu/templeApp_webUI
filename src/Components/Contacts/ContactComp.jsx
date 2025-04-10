import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: '#0d1117', minHeight: '100vh', p: 5 }}>
      <Grid container spacing={5}>
        {/* Left Side - Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold', mb: 3 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 4 }}>
            An extremely detailed and comprehensive description goes here,
            providing an extensive amount of information about the topic
          </Typography>

          <Box sx={{ color: '#fff', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Phone</Typography>
            <Typography>(303) 555-0105</Typography>
            <hr style={{ borderColor: '#444', margin: '10px 0' }} />
          </Box>

          <Box sx={{ color: '#fff', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email</Typography>
            <Typography>mail@example.com</Typography>
            <hr style={{ borderColor: '#444', margin: '10px 0' }} />
          </Box>

          <Box sx={{ color: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Address</Typography>
            <Typography>2972 Westheimer Rd. Santa Ana, Illinois 85486</Typography>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#0b1d25',
              p: 4,
              borderRadius: 2,
              color: '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                    sx: {
                      '& fieldset': { borderColor: '#fff' },
                      '&:hover fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#fff' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                    sx: {
                      '& fieldset': { borderColor: '#fff' },
                      '&:hover fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#fff' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ color: '#fff', mb: 1 }}>
                  Numbers
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                    sx: {
                      '& fieldset': { borderColor: '#fff' },
                      '&:hover fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#fff' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                    sx: {
                      '& fieldset': { borderColor: '#fff' },
                      '&:hover fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#fff' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label="Type your message..."
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#aaa' } }}
                  InputProps={{
                    style: { color: '#fff' },
                    sx: {
                      '& fieldset': { borderColor: '#fff' },
                      '&:hover fieldset': { borderColor: '#fff' },
                      '&.Mui-focused fieldset': { borderColor: '#fff' },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#f57c00',
                    '&:hover': { backgroundColor: '#e65100' },
                    px: 4,
                    py: 1,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
