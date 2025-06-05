import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const DonationLayout = ({ title, subtitle, children }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 600,
            color: 'primary.main',
            mb: 1
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {subtitle}
        </Typography>
      </Box>
      {children}
    </Container>
  );
};

export default DonationLayout; 