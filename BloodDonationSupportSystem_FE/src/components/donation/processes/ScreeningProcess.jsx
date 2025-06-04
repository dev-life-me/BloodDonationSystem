import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@mui/material';

const ScreeningProcess = ({ 
  selectedDonor,
  open,
  onClose,
  onConfirm,
  dialogType
}) => {
  const getDialogContent = () => {
    switch (dialogType) {
      case 'startScreening':
        return {
          title: 'Confirm Process Start',
          content: `Do you want to move ${selectedDonor?.name} to the Screening step?`
        };
      case 'screeningFail':
        return {
          title: 'Confirm Screening Failure',
          content: `Are you sure you want to mark ${selectedDonor?.name}'s screening as failed?`
        };
      case 'screeningPass':
        return {
          title: 'Confirm Screening Passed',
          content: `Do you want to move ${selectedDonor?.name} to the Collecting step?`
        };
      default:
        return { title: '', content: '' };
    }
  };

  const dialogContent = getDialogContent();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="screening-dialog-title"
      aria-describedby="screening-dialog-description"
    >
      <DialogTitle id="screening-dialog-title">
        {dialogContent.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="screening-dialog-description">
          {dialogContent.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button 
          onClick={onClose}
          variant="outlined"
          color="inherit"
        >
          Cancel
        </Button>
        <Button 
          onClick={onConfirm}
          variant="contained"
          color={dialogType.includes('Fail') ? 'error' : 'primary'}
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScreeningProcess; 