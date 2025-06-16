import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from '@mui/material';

export default function BloodDonationSurveyForm() {
  const [answers, setAnswers] = useState({});

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          p: 3,
          borderRadius: 2,
          boxShadow: 1,
          width: '100%',
          maxWidth: '1200px',
          marginTop: 10,
        }}
      >
        <Grid container spacing={3}>
          {/* Cột bên trái: Thông tin cá nhân + liên hệ */}
          <Grid item xs={12} md={6}>
            {/* Thông tin cá nhân */}
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 1, mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 2, textTransform:'uppercase'}} color="info">
                Thông tin cá nhân
              </Typography>
              {[
                ['Họ và tên', 'PHẠM ĐĂNG QUANG'],
                ['Ngày sinh', '02/01/2004'],
                ['Giới tính', 'Nam'],
                ['Nghề nghiệp', 'Sinh viên'],
                ['Đơn vị', '-'],
                ['Nhóm máu', 'O+'],
              ].map(([label, value], idx) => (
                <Typography key={idx} sx={{ mb: 2 }}>
                  <strong>{label}:</strong> {value}
                </Typography>
              ))}
            </Box>

            {/* Thông tin liên hệ */}
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom sx ={{ mb: 2, fontweight:'bold',textTransform:'uppercase' }} color="info">
                Thông tin liên hệ
              </Typography>
              {[
                ['Địa chỉ liên hệ', '3/26/28, P. Bình Hưng Hòa, Q. Bình Tân, TP HCM'],
                ['Điện thoại di động', '[Ẩn]'],
                ['Điện thoại bàn', '-'],
                ['Email', '[Ẩn]'],
              ].map(([label, value], idx) => (
                <Typography key={idx} sx={{ mb: 2 }}>
                  <strong>{label}:</strong> {value}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Cột bên phải: Phiếu đăng ký hiến máu */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom color="info" sx={{fontweight : 'bold',textTransform:'uppercase'}}>
                Phiếu đăng ký hiến máu
              </Typography>
              <FormControl component="fieldset" sx={{ mt: 1 }}>
                {[
                  '1. Anh/chị có bị mù màu không?',
                  '2. Hiến máu lần đầu/tái máu không?',
                  '3. Trong 12 tháng gần đây, anh/chị có bị bệnh truyền nhiễm không?',
                  '4. Trong 12 tháng gần đây, anh/chị có phẫu thuật hoặc điều trị nha khoa không?',
                  '5. Trong 01 tháng gần đây, anh/chị có thay đổi sức khỏe không?',
                  '6. Trong 14 ngày gần đây, anh/chị có tiếp xúc nguồn lây bệnh không?',
                  '7. Trong 07 ngày gần đây, anh/chị có triệu chứng bất thường không?',
                  '8. Có bị hỏng thận không?',
                ].map((question, index) => (
                  <Box key={index} sx={{ mb: 0 }}>
                    <FormLabel component="legend" sx={{ mb: 0 }}>
                      {question}
                    </FormLabel>
                    <RadioGroup
                      row
                      name={`question-${index}`}
                      value={answers[`question-${index}`] || ''}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Có" />
                      <FormControlLabel value="no" control={<Radio />} label="Không" />
                    </RadioGroup>
                  </Box>
                ))}
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
          Xác nhận đăng ký
        </Button>
      </Box>
    </Box>
  );
}
