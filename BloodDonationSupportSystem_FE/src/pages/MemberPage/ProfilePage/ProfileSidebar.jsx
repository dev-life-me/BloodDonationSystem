import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  { label: 'Hồ sơ', icon: <PersonIcon />, path: '/user/profile' },
  { label: 'Chứng chỉ', icon: <WorkspacePremiumIcon />, path: '/user/certificate' },
  { label: 'Lịch sử hiến máu', icon: <HistoryIcon />, path: '/user/history' },
];

const SIDEBAR_WIDTH = 220;

const ProfileSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation();


  // Get current selected item based on location
  const getCurrentSelectedItem = () => {
    const currentPath = location.pathname;
    for (const item of items) {

      if (item === currentPath) return item.path;
    }
    return 'Hồ sơ';
  };

  const [selectedItem, setSelectedItem] = useState(getCurrentSelectedItem());

  return (
    <Box sx={{
      width: SIDEBAR_WIDTH,
      height: '100vh',
      bgcolor: '#fff',
      borderRight: '1px solid #f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      py: 3,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <Box sx={{ marginTop: "70px" }}>
        <Typography variant="h6" sx={{ px: 3, mb: 2, fontWeight: 700 }}>
          Thông tin của bạn
        </Typography>
        <List>
          {items.map((item, idx) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={selectedItem === item.label}
                onClick={() => {
                  setSelectedItem(item.label);
                  navigate(item.path);
                }}
                sx={{
                  mx: 1.5,
                  borderRadius: 2,
                  color: selectedItem === item.label ? '#667eea' : '#64748b',
                  minHeight: 48,
                  '&.Mui-selected': {
                    bgcolor: '#eff6ff',
                    borderLeft: '4px solid #667eea',
                    '&:hover': {
                      bgcolor: '#dbeafe',
                    },
                  },
                  '&:hover': {
                    bgcolor: '#f1f5f9',
                    transform: 'translateX(4px)',
                    transition: 'all 0.2s ease-in-out',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <ListItemIcon sx={{
                  color: selectedItem === item.label ? '#667eea' : '#94a3b8',
                  minWidth: 40,
                  transition: 'color 0.2s ease-in-out'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: selectedItem === item.text ? 600 : 500,
                      fontSize: '0.9rem',
                      transition: 'font-weight 0.2s ease-in-out'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ px: 3, pb: 5 }}>
        <Divider sx={{ mb: 2 }} />
        <ListItemButton sx={{ color: '#f44336', borderRadius: 2 }}>
          <ListItemIcon sx={{ color: '#f44336', minWidth: 36 }}><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Đăng xuất" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default ProfileSidebar; 