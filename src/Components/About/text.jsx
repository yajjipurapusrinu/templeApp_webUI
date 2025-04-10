import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const TempleSignificance = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0a0f0f',
        color: 'white',
        py: 10,
        px: { xs: 3, md: 20 },
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'serif',
          fontWeight: 'bold',
          mb: 4,
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Temple Significance
      </Typography>

      {/* List */}
      <List sx={{ textAlign: 'left', display: 'inline-block' }}>
        <ListItem sx={{ py: 1 }}>
          <ListItemText
            primary={
              <Typography>
                <strong>A Million Shiva Lingas:</strong> Witness the grandeur of Koti Lingas,
                symbolizing eternity and infinite power.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ py: 1 }}>
          <ListItemText
            primary={
              <Typography>
                <strong>Shakti Peetha Presence:</strong> The divine energy of Goddess Parvati is
                enshrined alongside Lord Shiva, making this a powerful spiritual destination.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ py: 1 }}>
          <ListItemText
            primary={
              <Typography>
                <strong>Vedic Traditions:</strong> Daily pujas, Rudrabhishekam, and Mahanyasa
                Parayanas performed by learned priests.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ py: 1 }}>
          <ListItemText
            primary={
              <Typography>
                <strong>Spiritual Retreat:</strong> A peaceful environment for meditation, yoga, and
                self-discovery.
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default TempleSignificance;
