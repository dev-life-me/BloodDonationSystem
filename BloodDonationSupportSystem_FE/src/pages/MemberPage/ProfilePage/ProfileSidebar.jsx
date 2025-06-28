import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

const items = [
  { label: 'User Profile', icon: <PersonIcon />, selected: true },
  { label: 'Certificate', icon: <WorkspacePremiumIcon /> },
  { label: 'History', icon: <HistoryIcon /> },
];

const SIDEBAR_WIDTH = 220;

const ProfileSidebar = () => {
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
      <Box sx={{marginTop: "70px"}}>
        <Typography variant="h6" sx={{ px: 3, mb: 2, fontWeight: 700 }}>
          User Profile
        </Typography>
        <List>
          {items.map((item, idx) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton selected={item.selected} sx={{ py: 1.5, px: 3 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{px: 3, pb: 5}}>
        <Divider sx={{ mb: 2 }} />
        <ListItemButton sx={{ color: '#f44336', borderRadius: 2 }}>
          <ListItemIcon sx={{ color: '#f44336', minWidth: 36 }}><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default ProfileSidebar; 