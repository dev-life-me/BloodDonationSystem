import React, { useState } from 'react';
import { Box, Tabs, Tab, Paper } from '@mui/material';

import DonationLayout from '../../layouts/DonationLayout/DonationLayout';
import TabPanel from '../../components/common/TabPanel';
import ActiveDonations from '../../components/donation/ActiveDonations';
import InProgressDonations from '../../components/donation/InProgressDonations';
import CompletedDonations from '../../components/donation/CompletedDonations';
import ScreeningProcess from '../../components/donation/processes/ScreeningProcess';
import CollectionProcess from '../../components/donation/processes/CollectionProcess';
import StatusUpdateMenu from '../../components/donation/processes/StatusUpdateMenu';

const DonationManagement = () => {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [dialogType, setDialogType] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [collectedAmount, setCollectedAmount] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleStartProcess = (donor) => {
    setSelectedDonor(donor);
    setDialogType('startScreening');
    setOpenDialog(true);
  };

  const handleUpdateStatusClick = (event, donor) => {
    setAnchorEl(event.currentTarget);
    setSelectedDonor(donor);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleStatusOptionClick = (option) => {
    handleMenuClose();
    setDialogType(option);
    setOpenDialog(true);
    setCollectedAmount('');
    setAmountError('');
  };

  const validateAmount = (amount) => {
    const numAmount = Number(amount);
    if (!amount || amount.trim() === '') {
      return 'Amount is required';
    }
    if (isNaN(numAmount)) {
      return 'Amount must be a number';
    }
    if (numAmount <= 0) {
      return 'Amount must be greater than 0';
    }
    if (numAmount > 1000) {
      return 'Amount cannot exceed 1000ml';
    }
    return '';
  };

  const handleConfirmAction = () => {
    switch (dialogType) {
      case 'startScreening':
        console.log(`Moving donor ${selectedDonor.name} to Screening stage`);
        break;
      case 'screeningFail':
        console.log(`Marking ${selectedDonor.name}'s screening as Failed`);
        break;
      case 'screeningPass':
        console.log(`Moving donor ${selectedDonor.name} to Collecting stage`);
        break;
      case 'collectingFail':
        console.log(`Marking ${selectedDonor.name}'s collection as Failed`);
        break;
      case 'collectingComplete':
        const error = validateAmount(collectedAmount);
        if (error) {
          setAmountError(error);
          return;
        }
        console.log(`Completing ${selectedDonor.name}'s donation with ${collectedAmount}ml collected`);
        break;
    }
    handleCloseDialog();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedDonor(null);
    setDialogType('');
    setCollectedAmount('');
    setAmountError('');
  };

  const handleAmountChange = (value) => {
    setCollectedAmount(value);
    setAmountError('');
  };

  const waitingDonors = [
    { id: 'D-1028', name: 'Emily Wilson', time: '10:15 AM', status: 'Pending' },
    { id: 'D-1029', name: 'James Brown', time: '10:30 AM', status: 'Pending' },
    { id: 'D-1030', name: 'Sophia Martinez', time: '10:45 AM', status: 'Pending' }
  ];

  const inProgressDonors = [
    { id: 'D-1023', name: 'John Smith', time: '09:30 AM', status: 'Collecting' },
    { id: 'D-1024', name: 'Maria Garcia', time: '09:45 AM', status: 'Screening' },
    { id: 'D-1025', name: 'David Lee', time: '10:00 AM', status: 'Screening' }
  ];

  const completedDonors = [
    { id: 'D-1020', name: 'Sarah Johnson', time: '09:00 AM', amount: '450ml' },
    { id: 'D-1021', name: 'Michael Wong', time: '09:15 AM', amount: '450ml' },
    { id: 'D-1022', name: 'Lisa Taylor', time: '09:30 AM', amount: '450ml' }
  ];

  const isScreeningDialog = dialogType === 'startScreening' || 
    dialogType === 'screeningFail' || 
    dialogType === 'screeningPass';

  const isCollectionDialog = dialogType === 'collectingFail' || 
    dialogType === 'collectingComplete';

  return (
    <DonationLayout
      title="Blood Donation Manager"
      subtitle="Monitor and manage blood donation processes in real-time"
    >
      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 2, 
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          bgcolor: 'background.default', 
          px: 2 
        }}>
          <Tabs 
            value={value} 
            onChange={handleChange}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                py: 2,
                minHeight: '48px'
              }
            }}
          >
            <Tab label={`Active Donations (${waitingDonors.length})`} />
            <Tab label={`In Progress (${inProgressDonors.length})`} />
            <Tab label={`Completed (${completedDonors.length})`} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <ActiveDonations 
            donors={waitingDonors}
            onStartProcess={handleStartProcess}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <InProgressDonations 
            donors={inProgressDonors}
            onStatusUpdate={handleUpdateStatusClick}
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <CompletedDonations donors={completedDonors} />
        </TabPanel>
      </Paper>

      {isScreeningDialog && (
        <ScreeningProcess
          selectedDonor={selectedDonor}
          open={openDialog}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmAction}
          dialogType={dialogType}
        />
      )}

      {isCollectionDialog && (
        <CollectionProcess
          selectedDonor={selectedDonor}
          open={openDialog}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmAction}
          dialogType={dialogType}
          collectedAmount={collectedAmount}
          onAmountChange={handleAmountChange}
          amountError={amountError}
        />
      )}

      <StatusUpdateMenu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        selectedDonor={selectedDonor}
        onStatusOptionClick={handleStatusOptionClick}
      />
    </DonationLayout>
  );
};

export default DonationManagement; 