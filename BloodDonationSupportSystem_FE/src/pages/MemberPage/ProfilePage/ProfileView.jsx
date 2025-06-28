import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
} from '@mui/material';

const ProfileView = ({ user, onEdit }) => {
  return (
    <Box sx={{ m: 10 }}>
      <Paper sx={{width : 500, padding: 2, margin: 'auto'}}>
        <Stack spacing={2}>
          <Typography variant='h5'>Thông tin cá nhân</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box>
              <Typography ><strong>Họ và tên:</strong>{user.fullName}</Typography>
              <Typography><strong>Giới tính:</strong> {user.gender}</Typography>
              <Typography><strong>Ngày sinh:</strong> {user.dob}</Typography>
              <Typography><strong>Nhóm máu:</strong> {user.bloodType}</Typography>
              <Typography><strong>Địa chỉ:</strong> {user.address}</Typography>
            </Box>
          </Box>
          <Divider />
           <Typography variant='h5'>Liên hệ</Typography>
          <Typography><strong>Số điện thoại:</strong> {user.phoneNumber}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>
          <Box >
            <Button variant="contained" onClick={onEdit}>Edit</Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ProfileView;