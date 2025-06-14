import { Box, Typography, Stack, Button } from "@mui/material";
import { People } from "@mui/icons-material";
import axios from "axios";

export default function BloodeDonationEventCard({ item }) {

  const hanldeDate = (item, account) => {
    console.log(item);
    return ({
      phoneNumber: account.phoneNumber,
      fullName: account.fullName,
      gender: account.gender,
      address1: account.address,
      bloodType: account.bloodType,
      bloodSchedule: item.id,
      status: "Đang Chờ",
      title: item.title,
      address2: item.address,
      operatingDate: item.operatingDate,
      startTime: item.startTime,
      endTime: item.endTime
    })
  }

  const booking = async (item) => {
    try {
      const currentAccount = await axios.get('http://localhost:3001/user');
      if (currentAccount) {
        const data = hanldeDate(item,currentAccount.data);
        const res = await axios.post('http://localhost:3001/bloodDonationRegister', data);
        if(res.data){
          console.log("succes")
        }else{
          console.log("error")
        }
      }
    } catch (err) {

    }
  }
  function onBook() {
    booking(item);
    alert('Đã đặt lịch!');
  }

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: '#f5f5f5',
        boxShadow: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 2,
        flexWrap: 'wrap',
        marginTop: '20px'
      }}
    >
      <Box sx={{ flex: 1, minWidth: '300px' }}>
        <Typography variant="subtitle1" fontWeight="bold" color="primary">
          {item.title}
        </Typography>

        <Typography variant="body2" mt={1}>
          <strong>Địa chỉ:</strong> {item.address}
        </Typography>

        <Typography variant="body2">
          <strong>Thời gian hoạt động:</strong> {item.operatingDate}
        </Typography>

        <Typography variant="body2">
          <strong>Thời gian hiến máu:</strong> {"Từ " + item.startTime + " Đến " + item.endTime}
        </Typography>
      </Box>

      <Stack direction="column" alignItems="center" spacing={1} sx={{ minWidth: '130px' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <People fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            Số lượng đăng ký
          </Typography>
        </Stack>

        <Typography variant="h6" fontWeight="bold" color="primary">
          {item.numberRegister}/{item.capacity} <Typography variant="body2" component="span">Người</Typography>
        </Typography>

        <Button variant="contained" onClick={ onBook}>
          Đặt lịch
        </Button>
      </Stack>
    </Box>
  );

}