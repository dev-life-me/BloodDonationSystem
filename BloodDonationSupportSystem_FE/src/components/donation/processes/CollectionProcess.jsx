import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  TextField,
} from '@mui/material';

const CollectionProcess = ({
  selectedDonor,
  open,
  onClose,
  onConfirm,
  dialogType,
  collectedAmount,
  onAmountChange,
  amountError
}) => {
  const getDialogContent = () => {
    switch (dialogType) {
      case 'collectingFail':
        return {
          title: 'Confirm Collection Failure',
          content: `Are you sure you want to mark ${selectedDonor?.name}'s collection as failed?`
        };
      case 'collectingComplete':
        return {
          title: 'Complete Blood Collection',
          content: 'Please enter the amount of blood collected:'
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
      aria-labelledby="collection-dialog-title"
      aria-describedby="collection-dialog-description"
    >
      <DialogTitle id="collection-dialog-title">
        {dialogContent.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText 
          id="collection-dialog-description" 
          sx={{ mb: dialogType === 'collectingComplete' ? 2 : 0 }}
        >
          {dialogContent.content}
        </DialogContentText>
        {dialogType === 'collectingComplete' && (
          <TextField
            autoFocus
            margin="dense"
            label="Blood Amount (ml)"
            type="number"
            fullWidth
            variant="outlined"
            value={collectedAmount}
            onChange={(e) => onAmountChange(e.target.value)}
            error={Boolean(amountError)}
            helperText={amountError}
            InputProps={{
              inputProps: { 
                min: 0,
                max: 1000
              }
            }}
          />
        )}
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

export default CollectionProcess; 