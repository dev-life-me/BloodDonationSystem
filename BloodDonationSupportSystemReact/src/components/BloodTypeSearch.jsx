import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper,
  Container,
} from '@mui/material';

const bloodTypeCompatibility = {
  'A+': ['A+', 'A-', 'O+', 'O-'],
  'A-': ['A-', 'O-'],
  'B+': ['B+', 'B-', 'O+', 'O-'],
  'B-': ['B-', 'O-'],
  'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  'AB-': ['A-', 'B-', 'AB-', 'O-'],
  'O+': ['O+', 'O-'],
  'O-': ['O-'],
};

const BloodTypeSearch = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('');

  const handleBloodTypeChange = (event) => {
    setSelectedBloodType(event.target.value);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{ mb: 4 }}
      >
        Blood Type Compatibility Checker
      </Typography>
      <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Blood Type Compatibility Search
        </Typography>
        
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="blood-type-label">Select Blood Type</InputLabel>
          <Select
            labelId="blood-type-label"
            id="blood-type-select"
            value={selectedBloodType}
            label="Select Blood Type"
            onChange={handleBloodTypeChange}
          >
            {Object.keys(bloodTypeCompatibility).map((bloodType) => (
              <MenuItem key={bloodType} value={bloodType}>
                {bloodType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedBloodType && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Compatible Blood Types for {selectedBloodType}:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {bloodTypeCompatibility[selectedBloodType].map((type) => (
                <Paper
                  key={type}
                  sx={{
                    px: 2,
                    py: 1,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 1,
                  }}
                >
                  <Typography>{type}</Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
    </Box>
   
  );
};

export default BloodTypeSearch; 