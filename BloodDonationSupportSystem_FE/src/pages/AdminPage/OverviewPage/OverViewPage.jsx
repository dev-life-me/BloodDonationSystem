import React, { useEffect, useState } from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import StatisticsCards from './StatisticsCards';
import DonationChart from './DonationChart';
import BloodVolumeChart from './BloodVolumeChart';

const OverViewPage = () => {
  const [userCount, setUserCount] = useState(0);
  const [donationRegisterCount, setDonationRegisterCount] = useState(0);
  const [donationSuccessCount, setDonationSuccessCount] = useState(0);
  const [donationCancelCount, setDonationCancelCount] = useState(0);
  
  const theme = useTheme();

  useEffect(() => {
    // Fake data for cards - in a real app this would be an API call
    setUserCount(1250);
    setDonationRegisterCount(890);
    setDonationSuccessCount(756);
    setDonationCancelCount(134);
  }, []);

  const values = {
    userCount,
    donationRegisterCount,
    donationSuccessCount,
    donationCancelCount,
  };

  return (
    <Box sx={{ p: { xs: 1, md: 4 }, background: theme.palette.background.default, minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center" color="primary.main">
        Thống kê tổng quan
      </Typography>
      
      <StatisticsCards values={values} />
      
      <DonationChart />
        
      <BloodVolumeChart />

    </Box>
  );
};

export default OverViewPage; 