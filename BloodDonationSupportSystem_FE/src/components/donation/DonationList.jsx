import React from 'react';
import { Typography, List, Paper } from '@mui/material';
import DonorItem from './DonorItem';

const DonationList = ({ 
  title, 
  donors, 
  type,
  onAction,
  onStatusUpdate 
}) => {
  return (
    <>
      <Typography 
        variant="subtitle2" 
        color="text.secondary"
        sx={{ 
          mb: 3,
          px: 2,
          fontSize: '0.875rem'
        }}
      >
        {title}
      </Typography>
      <Paper 
        elevation={0}
        sx={{ 
          bgcolor: 'background.paper',
          borderRadius: 2
        }}
      >
        <List disablePadding>
          {donors.map(donor => (
            <DonorItem
              key={donor.id}
              donor={donor}
              type={type}
              onAction={onAction}
              onStatusUpdate={onStatusUpdate}
            />
          ))}
        </List>
      </Paper>
    </>
  );
};

export default DonationList; 