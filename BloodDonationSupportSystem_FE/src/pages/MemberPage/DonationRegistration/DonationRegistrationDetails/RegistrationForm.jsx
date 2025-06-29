import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Alert,
  Divider,
  useTheme,
  alpha,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { vi } from 'date-fns/locale';
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { CalendarToday, Event, Info } from "@mui/icons-material";

export default function BloodDonationRegisterForm({ onSubmit, initialValues = { startDate: null, endDate: null } }) {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: initialValues
  });

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  // Get today's date
  const getTodayDate = () => {
    return new Date();
  };

  // Get maximum date (1 year from today)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate;
  };

  // Validate date range
  const validateDateRange = (endDateValue, formValues) => {
    if (!endDateValue || !formValues.startDate) return true;
    
    const start = new Date(formValues.startDate);
    const end = new Date(endDateValue);
    
    if (end <= start) {
      return "Ngày kết thúc phải sau ngày bắt đầu";
    }
    
    // Check if range is not more than 3 months
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 90) {
      return "Khoảng thời gian không được vượt quá 3 tháng";
    }
    
    return true;
  };

  // Validate start date
  const validateStartDate = (value) => {
    if (!value) return "Ngày bắt đầu là bắt buộc";
    
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return "Ngày bắt đầu không được trong quá khứ";
    }
    
    return true;
  };

  // Validate end date
  const validateEndDate = (value, formValues) => {
    if (!value) return "Ngày kết thúc là bắt buộc";
    
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return "Ngày kết thúc không được trong quá khứ";
    }
    
    return validateDateRange(value, formValues);
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    onSubmit?.(data); // gọi hàm callback nếu có
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={vi}>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          maxWidth: 600,
          mx: 'auto',
          my: 10,
          borderRadius: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.primary.light, 0.05)} 100%)`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
        }}
      >
        <Stack spacing={3}>
          {/* Header */}
          <Box textAlign="center">
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: '50%',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                mb: 2
              }}
            >
              <Event sx={{ fontSize: 32, color: theme.palette.primary.main }} />
            </Box>
            <Typography variant="h5" fontWeight={700} gutterBottom color="primary">
              Đăng ký hiến máu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chọn khoảng thời gian bạn muốn hiến máu
            </Typography>
          </Box>

          <Divider />

          {/* Info Alert */}
          <Alert 
            severity="info" 
            icon={<Info />}
            sx={{ 
              borderRadius: 2,
              '& .MuiAlert-message': {
                fontSize: '0.9rem'
              }
            }}
          >
            <Typography variant="body2">
              <strong>Lưu ý:</strong> Vui lòng chọn khoảng thời gian phù hợp với lịch trình của bạn. 
              Khoảng thời gian không được vượt quá 3 tháng và không được trong quá khứ.
            </Typography>
          </Alert>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <Stack spacing={3}>
              <Controller
                name="startDate"
                control={control}
                rules={{
                  required: "Ngày bắt đầu là bắt buộc",
                  validate: validateStartDate
                }}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    label="Ngày bắt đầu mong muốn"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                    minDate={getTodayDate()}
                    maxDate={getMaxDate()}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!error,
                        helperText: error?.message || "Chọn ngày bạn muốn bắt đầu hiến máu (từ hôm nay)",
                        InputLabelProps: { 
                          shrink: true,
                          sx: { fontWeight: 600, color: theme.palette.text.primary }
                        },
                       
                      }
                    }}
                  />
                )}
              />

              <Controller
                name="endDate"
                control={control}
                rules={{
                  required: "Ngày kết thúc là bắt buộc",
                  validate: (value) => validateEndDate(value, { startDate })
                }}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    label="Ngày kết thúc mong muốn"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                    minDate={startDate || getTodayDate()}
                    maxDate={getMaxDate()}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!error,
                        helperText: error?.message || "Chọn ngày cuối cùng bạn có thể hiến máu (tối đa 3 tháng)",
                        InputLabelProps: { 
                          shrink: true,
                          sx: { fontWeight: 600, color: theme.palette.text.primary }
                        },
                       
                      }
                    }}
                  />
                )}
              />

              <Button 
                type="submit" 
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  boxShadow: `0 4px 14px 0 ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                    boxShadow: `0 6px 20px 0 ${alpha(theme.palette.primary.main, 0.4)}`,
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Gửi đăng ký hiến máu
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </LocalizationProvider>
  );
}
