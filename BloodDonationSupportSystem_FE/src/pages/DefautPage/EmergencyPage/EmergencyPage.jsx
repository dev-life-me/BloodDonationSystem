import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  IconButton,
  alpha,
  useTheme,
  Stack,
} from '@mui/material';
import {
  Favorite,
  Close,
  Phone,
  AccessTime,
  Announcement,
  FiberManualRecord,
} from '@mui/icons-material';

const emergencyCases = [
  {
    status: 'CẤP CỨU',
    patient: 'Bệnh nhân N.V.A',
    reason: 'Tai nạn giao thông - Mất máu nhiều',
    bloodType: 'O-',
    quantity: 4,
    hospital: 'Chợ Rẫy',
    timeLeft: 2,
    color: '#D32F2F',
  },
  {
    status: 'KHẨN CẤP',
    patient: 'Bệnh nhân L.T.M',
    reason: 'Phẫu thuật tim - Cần máu dự phòng',
    bloodType: 'A+',
    quantity: 2,
    hospital: 'Đại học Y Dược',
    timeLeft: 6,
    color: '#F57C00',
  },
  {
    status: 'CẦN GẤP',
    patient: 'Bệnh nhân P.H.D',
    reason: 'Ung thư máu - Điều trị hóa chất',
    bloodType: 'AB+',
    quantity: 3,
    hospital: 'Ung Bướu',
    timeLeft: 12,
    color: '#E6B800',
  },
];

const stats = [
  { value: 24, label: 'Trường hợp khẩn cấp hôm nay' },
  { value: 156, label: 'Đơn vị máu cần thiết' },
  { value: 89, label: 'Người đã hỗ trợ' },
  { value: 67, label: 'Đơn vị máu còn thiếu' },
];

const EmergencyPage = ({ isEmbedded = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: '#FFF9F9', minHeight: isEmbedded ? 'auto' : '100vh', py: 4, position: 'relative' }}>
      {!isEmbedded && (
        <IconButton
          sx={{ position: 'absolute', top: 16, right: 16, bgcolor: 'rgba(0,0,0,0.5)', color: 'white', '&:hover': { bgcolor: 'black' } }}
        >
          <Close />
        </IconButton>
      )}
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 5 }}>
          <Chip
            icon={<Announcement sx={{ color: 'white !important' }} />}
            label="KHẨN CẤP"
            sx={{ bgcolor: '#D32F2F', color: 'white', fontWeight: 'bold', fontSize: '1rem', mb: 2 }}
          />
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Các Trường Hợp Cần Hỗ Trợ Khẩn Cấp
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400}>
            Những bệnh nhân đang cần máu gấp. Mỗi giọt máu của bạn có thể cứu sống họ.
          </Typography>
        </Box>

        {/* Emergency Cards */}
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {emergencyCases.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 4,
                  borderTop: `4px solid ${item.color}`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Chip label={item.status} sx={{ bgcolor: item.color, color: 'white', fontWeight: 'bold' }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', color: item.color, fontWeight: 'bold' }}>
                      <FiberManualRecord sx={{ fontSize: 12, mr: 0.5 }} />
                      <Typography variant="caption" sx={{ fontWeight: 'bold' }}>{item.timeLeft} giờ còn lại</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ my: 1 }}>{item.patient}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{item.reason}</Typography>
                  
                  <Stack container spacing={1} >
                    <Box display={'flex'}>
                    <Typography variant="body1">Nhóm máu cần:</Typography>
                    <Chip label={item.bloodType} variant="outlined" color="primary" sx={{fontWeight: 'bold'}} />
                    </Box>
                    
                    <Box display={'flex'}>
                    <Typography variant="body1">Số lượng:</Typography>
                    <Typography variant="body1" fontWeight="bold" color={item.color}>{item.quantity} đơn vị</Typography>
                    </Box>

                    <Box display={'flex'}>
                    <Typography variant="body1">Bệnh viện:</Typography>
                    <Typography variant="body1" fontWeight="bold">{item.hospital}</Typography>
                    </Box>
                  </Stack>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Favorite />}
                    sx={{
                      bgcolor: item.color,
                      color: 'white',
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: alpha(item.color, 0.85)
                      }
                    }}
                  >
                    Hỗ Trợ Ngay
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Statistics */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h3" fontWeight="bold" sx={{ color: '#D32F2F' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Hotline */}
        <Box textAlign="center">
          <Button
            variant="contained"
            startIcon={<Phone />}
            sx={{
              bgcolor: '#D32F2F',
              color: 'white',
              borderRadius: 2,
              px: 5,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: alpha('#D32F2F', 0.9)
              }
            }}
          >
            Hotline Khẩn Cấp: 1900 1234
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EmergencyPage; 