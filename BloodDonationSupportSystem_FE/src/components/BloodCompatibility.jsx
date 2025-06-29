import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Chip,
  Alert,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Bloodtype,
  LocalHospital,
  Science,
  Info,
} from '@mui/icons-material';

// Dữ liệu tương thích máu toàn diện (Vietnamese)
const bloodCompatibilityData = {
  'A+': {
    redBloodCells: {
      canReceive: ['A+', 'A-', 'O+', 'O-'],
      canDonate: ['A+', 'AB+'],
      description: 'Nhận được từ A+, A-, O+, O-. Cho được A+, AB+.'
    },
    plasma: {
      canReceive: ['A+', 'AB+'],
      canDonate: ['A+', 'A-', 'O+', 'O-'],
      description: 'Nhận huyết tương từ A+, AB+. Cho huyết tương cho A+, A-, O+, O-.'
    },
    platelets: {
      canReceive: ['A+', 'A-', 'O+', 'O-'],
      canDonate: ['A+', 'AB+'],
      description: 'Nhận tiểu cầu từ A+, A-, O+, O-. Cho tiểu cầu cho A+, AB+.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'A-': {
    redBloodCells: {
      canReceive: ['A-', 'O-'],
      canDonate: ['A+', 'A-', 'AB+', 'AB-'],
      description: 'Nhận được từ A-, O-. Cho được A+, A-, AB+, AB-.'
    },
    plasma: {
      canReceive: ['A+', 'A-', 'AB+', 'AB-'],
      canDonate: ['A-', 'O-'],
      description: 'Nhận huyết tương từ A+, A-, AB+, AB-. Cho huyết tương cho A-, O-.'
    },
    platelets: {
      canReceive: ['A-', 'O-'],
      canDonate: ['A+', 'A-', 'AB+', 'AB-'],
      description: 'Nhận tiểu cầu từ A-, O-. Cho tiểu cầu cho A+, A-, AB+, AB-.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'B+': {
    redBloodCells: {
      canReceive: ['B+', 'B-', 'O+', 'O-'],
      canDonate: ['B+', 'AB+'],
      description: 'Nhận được từ B+, B-, O+, O-. Cho được B+, AB+.'
    },
    plasma: {
      canReceive: ['B+', 'AB+'],
      canDonate: ['B+', 'B-', 'O+', 'O-'],
      description: 'Nhận huyết tương từ B+, AB+. Cho huyết tương cho B+, B-, O+, O-.'
    },
    platelets: {
      canReceive: ['B+', 'B-', 'O+', 'O-'],
      canDonate: ['B+', 'AB+'],
      description: 'Nhận tiểu cầu từ B+, B-, O+, O-. Cho tiểu cầu cho B+, AB+.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'B-': {
    redBloodCells: {
      canReceive: ['B-', 'O-'],
      canDonate: ['B+', 'B-', 'AB+', 'AB-'],
      description: 'Nhận được từ B-, O-. Cho được B+, B-, AB+, AB-.'
    },
    plasma: {
      canReceive: ['B+', 'B-', 'AB+', 'AB-'],
      canDonate: ['B-', 'O-'],
      description: 'Nhận huyết tương từ B+, B-, AB+, AB-. Cho huyết tương cho B-, O-.'
    },
    platelets: {
      canReceive: ['B-', 'O-'],
      canDonate: ['B+', 'B-', 'AB+', 'AB-'],
      description: 'Nhận tiểu cầu từ B-, O-. Cho tiểu cầu cho B+, B-, AB+, AB-.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'AB+': {
    redBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['AB+'],
      description: 'Nhận được từ tất cả các nhóm máu. Chỉ cho được AB+.'
    },
    plasma: {
      canReceive: ['AB+'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Chỉ nhận huyết tương từ AB+. Cho huyết tương cho tất cả các nhóm máu.'
    },
    platelets: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['AB+'],
      description: 'Nhận tiểu cầu từ tất cả các nhóm máu. Chỉ cho tiểu cầu cho AB+.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'AB-': {
    redBloodCells: {
      canReceive: ['A-', 'B-', 'AB-', 'O-'],
      canDonate: ['AB+', 'AB-'],
      description: 'Nhận được từ A-, B-, AB-, O-. Cho được AB+, AB-.'
    },
    plasma: {
      canReceive: ['AB+', 'AB-'],
      canDonate: ['A-', 'B-', 'AB-', 'O-'],
      description: 'Nhận huyết tương từ AB+, AB-. Cho huyết tương cho A-, B-, AB-, O-.'
    },
    platelets: {
      canReceive: ['A-', 'B-', 'AB-', 'O-'],
      canDonate: ['AB+', 'AB-'],
      description: 'Nhận tiểu cầu từ A-, B-, AB-, O-. Cho tiểu cầu cho AB+, AB-.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'O+': {
    redBloodCells: {
      canReceive: ['O+', 'O-'],
      canDonate: ['A+', 'B+', 'AB+', 'O+'],
      description: 'Nhận được từ O+, O-. Cho được A+, B+, AB+, O+.'
    },
    plasma: {
      canReceive: ['O+', 'AB+'],
      canDonate: ['O+', 'O-'],
      description: 'Nhận huyết tương từ O+, AB+. Cho huyết tương cho O+, O-.'
    },
    platelets: {
      canReceive: ['O+', 'O-'],
      canDonate: ['A+', 'B+', 'AB+', 'O+'],
      description: 'Nhận tiểu cầu từ O+, O-. Cho tiểu cầu cho A+, B+, AB+, O+.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  },
  'O-': {
    redBloodCells: {
      canReceive: ['O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Chỉ nhận được từ O-. Cho được tất cả các nhóm máu.'
    },
    plasma: {
      canReceive: ['O+', 'O-', 'AB+', 'AB-'],
      canDonate: ['O-'],
      description: 'Nhận huyết tương từ O+, O-, AB+, AB-. Chỉ cho huyết tương cho O-.'
    },
    platelets: {
      canReceive: ['O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Chỉ nhận tiểu cầu từ O-. Cho tiểu cầu cho tất cả các nhóm máu.'
    },
    whiteBloodCells: {
      canReceive: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canDonate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      description: 'Cần xét nghiệm HLA để xác định tương thích chính xác.'
    }
  }
};

const tabLabels = ['Hồng cầu', 'Huyết tương', 'Tiểu cầu', 'Bạch cầu'];

const BloodCompatibility = () => {
  const theme = useTheme();
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");

  const bloodTypes = Object.keys(bloodCompatibilityData);
  const filteredBloodTypes = bloodTypes.filter(type => type.toLowerCase().includes(search.toLowerCase()));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getComponentData = (bloodType, componentIndex) => {
    const components = ['redBloodCells', 'plasma', 'platelets', 'whiteBloodCells'];
    return bloodCompatibilityData[bloodType]?.[components[componentIndex]];
  };

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: '50%',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              mb: 2
            }}
          >
            <Bloodtype sx={{ fontSize: 40, color: theme.palette.primary.main }} />
          </Box>
          <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
            Tra cứu tương thích nhóm máu
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tìm kiếm tương thích nhóm máu cho các thành phần máu khác nhau
          </Typography>
        </Box>

        {/* Blood Type Selection */}
        <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Chọn nhóm máu của bạn
          </Typography>
          <Box sx={{ mb: 2 }}>
            <input
              type="text"
              placeholder="Tìm kiếm nhóm máu..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                fontSize: '1rem',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginBottom: 8
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {filteredBloodTypes.map((type) => (
              <Chip
                key={type}
                label={type}
                onClick={() => setSelectedBloodType(type)}
                variant={selectedBloodType === type ? 'filled' : 'outlined'}
                color={selectedBloodType === type ? 'primary' : 'default'}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  px: 2,
                  py: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.2s ease-in-out'
                  }
                }}
              />
            ))}
          </Box>
        </Paper>

        {selectedBloodType && (
          <>
            {/* Component Tabs */}
            <Paper elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  '& .MuiTab-root': {
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }
                }}
              >
                <Tab icon={<Bloodtype />} label={tabLabels[0]} />
                <Tab icon={<LocalHospital />} label={tabLabels[1]} />
                <Tab icon={<Science />} label={tabLabels[2]} />
                <Tab icon={<LocalHospital />} label={tabLabels[3]} />
              </Tabs>

              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom fontWeight={600} color="primary">
                  {selectedBloodType} - {tabLabels[activeTab]}
                </Typography>

                {(() => {
                  const componentData = getComponentData(selectedBloodType, activeTab);
                  if (!componentData) return null;

                  return (
                    <Grid container spacing={3}>
                      {/* Can Receive */}
                      <Grid item xs={12} md={6}>
                        <Card elevation={1} sx={{ height: '100%' }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600} color="success.main">
                              Có thể nhận từ:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                              {componentData.canReceive.map((type) => (
                                <Chip
                                  key={type}
                                  label={type}
                                  color="success"
                                  variant="filled"
                                  sx={{ fontWeight: 600 }}
                                />
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>

                      {/* Can Donate */}
                      <Grid item xs={12} md={6}>
                        <Card elevation={1} sx={{ height: '100%' }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600} color="info.main">
                              Có thể cho:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                              {componentData.canDonate.map((type) => (
                                <Chip
                                  key={type}
                                  label={type}
                                  color="info"
                                  variant="filled"
                                  sx={{ fontWeight: 600 }}
                                />
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  );
                })()}
              </Box>
            </Paper>
          </>
        )}
      </Box>
    </Box>
  );
};

export default BloodCompatibility; 