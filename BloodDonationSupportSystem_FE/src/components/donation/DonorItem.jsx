import React from 'react';
import {
  ListItem,
  Box,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import DonorInfo from './DonorInfo';

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return '#1976d2';
    case 'Screening':
      return '#ffc107';
    case 'Collecting':
      return '#9c27b0';
    default:
      return '#4caf50';
  }
};

const DonorItem = ({ donor, type, onAction, onStatusUpdate }) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        py: 3,
        px: 3,
        '&:hover': {
          bgcolor: 'rgba(0, 0, 0, 0.02)',
        },
      }}
    >
      <DonorInfo donor={donor} />
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {type === 'completed' ? (
          <Chip 
            label="Completed"
            color="success"
            sx={{ 
              minWidth: '100px',
              height: '32px',
              '& .MuiChip-label': {
                fontSize: '0.875rem',
              }
            }}
          />
        ) : (
          <Chip 
            label={donor.status}
            sx={{ 
              minWidth: '100px',
              height: '32px',
              bgcolor: getStatusColor(donor.status),
              color: 'white',
              '& .MuiChip-label': {
                fontSize: '0.875rem',
              }
            }}
          />
        )}
        {type !== 'completed' && (
          <Button 
            variant="outlined"
            size="medium"
            sx={{ 
              minWidth: '130px',
              height: '36px',
              borderRadius: '18px',
              textTransform: 'none',
              fontWeight: 500
            }}
            onClick={(e) => 
              type === 'waiting' 
                ? onAction(donor)
                : onStatusUpdate(e, donor)
            }
          >
            {type === 'waiting' ? 'Start Process' : 'Update Status'}
          </Button>
        )}
        {type === 'completed' && (
          <Typography 
            color="success.main"
            sx={{ 
              fontSize: '0.875rem',
              fontWeight: 500,
              bgcolor: 'success.light',
              px: 2,
              py: 1,
              borderRadius: 2
            }}
          >
            {donor.amount} collected
          </Typography>
        )}
      </Box>
    </ListItem>
  );
};

export default DonorItem; 