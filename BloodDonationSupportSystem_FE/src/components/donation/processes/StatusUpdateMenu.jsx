import React from 'react';
import { Menu, MenuItem, Divider } from '@mui/material';

const StatusUpdateMenu = ({
  anchorEl,
  onClose,
  selectedDonor,
  onStatusOptionClick
}) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
    PaperProps={{
      elevation: 3,
      sx: { 
        mt: 1,
        minWidth: 120,
        '& .MuiMenuItem-root': {
          py: 1.5
        }
      }
    }}
  >
    <MenuItem 
      onClick={() => onStatusOptionClick(
        selectedDonor?.status === 'Screening' ? 'screeningFail' : 'collectingFail'
      )}
      sx={{ color: 'error.main' }}
    >
      Fail
    </MenuItem>
    <Divider sx={{ my: 1 }} />
    <MenuItem 
      onClick={() => onStatusOptionClick(
        selectedDonor?.status === 'Screening' ? 'screeningPass' : 'collectingComplete'
      )}
      sx={{ color: 'success.main' }}
    >
      {selectedDonor?.status === 'Screening' ? 'Passed' : 'Completed'}
    </MenuItem>
  </Menu>
);

export default StatusUpdateMenu; 