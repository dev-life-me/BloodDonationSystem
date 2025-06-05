import React from 'react';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DonorInfo = ({ donor }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        bgcolor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 2,
      }}
    >
      <PersonIcon sx={{ color: 'white', fontSize: 28 }} />
    </Box>
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0.5 }}>
        {donor.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {donor.id}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {donor.time}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default DonorInfo; 