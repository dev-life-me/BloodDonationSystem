import { Tabs, Tab, Box, Typography } from '@mui/material';
import { useState } from 'react';
import BloodDonateList from './BloodDonateList';

const STATUS_LABELS = ['ĐÃ HIẾN', 'HỦY'];

// Sample data for demonstration
const sampleHistoryData = [
  {
    donationRegistrationId: 1,
    donationDate: '2024-01-15',
    addressHospital: 'Bệnh viện Bạch Mai - Hà Nội',
    status: 'ĐÃ HIẾN',
    bloodType: 'A+',
    volume: 350
  },
  {
    donationRegistrationId: 2,
    donationDate: '2024-03-20',
    addressHospital: 'Bệnh viện Chợ Rẫy - TP.HCM',
    status: 'ĐÃ HIẾN',
    bloodType: 'A+',
    volume: 350
  },
  {
    donationRegistrationId: 3,
    donationDate: '2024-05-10',
    addressHospital: 'Bệnh viện Đà Nẵng',
    status: 'ĐÃ HIẾN',
    bloodType: 'A+',
    volume: 350
  },
  {
    donationRegistrationId: 4,
    donationDate: '2024-07-08',
    addressHospital: 'Bệnh viện Bạch Mai - Hà Nội',
    status: 'HỦY',
    bloodType: 'A+',
    volume: 0
  },
  {
    donationRegistrationId: 5,
    donationDate: '2024-09-12',
    addressHospital: 'Bệnh viện Chợ Rẫy - TP.HCM',
    status: 'HỦY',
    bloodType: 'A+',
    volume: 0
  }
];

export default function BloodDonateTabs() {
  const [history, setHistory] = useState(sampleHistoryData);
  const [tabIndex, setTabIndex] = useState(0);

  const getListByStatus = (status) =>
    history.filter(item => item.status === status);

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2 }}>
      <Tabs value={tabIndex} onChange={(_, val) => setTabIndex(val)}>
        {STATUS_LABELS.map((status, i) => (
          <Tab key={i} label={`${status} (${getListByStatus(status).length})`} />
        ))}
      </Tabs>

      <Box mt={2}>
        {getListByStatus(STATUS_LABELS[tabIndex]).length === 0 ? (
          <Typography color="text.secondary">Chưa có lịch sử hiến máu nào.</Typography>
        ) : (
          <BloodDonateList list={getListByStatus(STATUS_LABELS[tabIndex])} />
        )}
      </Box>
    </Box>
  );
}
