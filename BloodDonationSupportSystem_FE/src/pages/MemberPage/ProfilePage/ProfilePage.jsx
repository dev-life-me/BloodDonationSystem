import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Avatar, Typography, TextField, Button, Stack } from '@mui/material';
import ProfileSidebar from './ProfileSidebar';

const initialUser = {
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  fullName: 'Sara Tancredi',
  phoneNumber: '(+98) 9123728167',
  dateOfBirth: '1990-05-15',
  address: 'New York, USA',
  email: 'SaraTancredi@gmail.com',
  bloodType: 'A+',
};

const ProfilePage = () => {
  const [user, setUser] = useState(initialUser);
  const [editUser, setEditUser] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(editUser);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card sx={{ width: 500, p: 3, boxShadow: 3, borderRadius: 4 }}>
              <CardContent>
                <Stack alignItems="center" spacing={2} mb={3}>
                  <Avatar src={user.avatar} sx={{ width: 90, height: 90, boxShadow: 2 }} />
                  <Typography variant="h6" fontWeight={700}>{user.fullName}</Typography>
                  <Typography variant="body2" color="text.secondary">{user.address}</Typography>
                </Stack>
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Họ và tên"
                      name="fullName"
                      value={editUser.fullName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Số điện thoạt"
                      name="phoneNumber"
                      value={editUser.phoneNumber}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      name="email"
                      value={editUser.email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Ngày sinh"
                      name="dateOfBirth"
                      type="date"
                      value={editUser.dateOfBirth}
                      onChange={handleChange}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Địa chỉ"
                      name="address"
                      value={editUser.address}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nhóm máu"
                      name="bloodType"
                      value={editUser.bloodType}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: '#001feb', color: 'white', px: 5, py: 1.5, borderRadius: 3, fontWeight: 600, fontSize: 16, boxShadow: 2, '&:hover': { bgcolor: '#001feb' } }}
                    onClick={handleSave}
                  >
                    Lưu thay đổi
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
    </Box>
  );
};

export default ProfilePage;