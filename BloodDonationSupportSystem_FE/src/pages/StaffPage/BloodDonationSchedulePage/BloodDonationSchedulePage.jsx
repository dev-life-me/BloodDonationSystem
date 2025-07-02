import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box, Button, Dialog } from "@mui/material";
import BloodDonationScheduleCreate from "./BloodDonationScheduleCreate";

export default function BloodDonationSchedule() {
    // Fake data for blood donation schedules
    const [schedule] = useState([
        {
            id: 1,
            title: "Sự kiện hiến máu tại Đại học Quốc gia",
            address: "Đại học Quốc gia, TP.HCM",
            operatingDate: "2024-06-10",
            startTime: "08:00",
            endTime: "16:00",
            numberRegister: 120,
            capcity: 200
        },
        {
            id: 2,
            title: "Ngày hội hiến máu Quận 1",
            address: "Nhà Văn hóa Thanh Niên, Quận 1, TP.HCM",
            operatingDate: "2024-06-12",
            startTime: "07:30",
            endTime: "15:00",
            numberRegister: 80,
            capcity: 150
        },
        {
            id: 3,
            title: "Hiến máu cứu người tại Bệnh viện Chợ Rẫy",
            address: "Bệnh viện Chợ Rẫy, Quận 5, TP.HCM",
            operatingDate: "2024-06-15",
            startTime: "09:00",
            endTime: "17:00",
            numberRegister: 200,
            capcity: 250
        },
        {
            id: 4,
            title: "Sự kiện hiến máu cộng đồng Bình Thạnh",
            address: "UBND Quận Bình Thạnh, TP.HCM",
            operatingDate: "2024-06-18",
            startTime: "08:30",
            endTime: "14:00",
            numberRegister: 60,
            capcity: 100
        },
        {
            id: 5,
            title: "Ngày hội hiến máu mùa hè",
            address: "Công viên Lê Văn Tám, Quận 3, TP.HCM",
            operatingDate: "2024-06-20",
            startTime: "07:00",
            endTime: "12:00",
            numberRegister: 90,
            capcity: 120
        },
        {
            id: 6,
            title: "Hiến máu tại Nhà Thiếu Nhi TP.HCM",
            address: "Nhà Thiếu Nhi, Quận 10, TP.HCM",
            operatingDate: "2024-06-22",
            startTime: "08:00",
            endTime: "13:00",
            numberRegister: 70,
            capcity: 100
        },
        {
            id: 7,
            title: "Sự kiện hiến máu tại Đại học Y Dược",
            address: "Đại học Y Dược, Quận 5, TP.HCM",
            operatingDate: "2024-06-25",
            startTime: "09:00",
            endTime: "15:00",
            numberRegister: 110,
            capcity: 180
        },
        {
            id: 8,
            title: "Ngày hội hiến máu Quận 7",
            address: "Trung tâm Văn hóa Quận 7, TP.HCM",
            operatingDate: "2024-06-28",
            startTime: "07:30",
            endTime: "14:00",
            numberRegister: 95,
            capcity: 130
        }
    ]);

    // State for modal dialog
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ p: 2, background: '#f5f6fa', minHeight: '100vh' }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 1200, margin: '32px auto' }}>
                <Typography variant="h4" textAlign={'center'} padding={'10px'} fontWeight={700}>
                    Lịch Hiến Máu
                </Typography>
                <Typography variant="subtitle1" textAlign={'center'} color="text.secondary" mb={3}>
                    Danh sách các sự kiện hiến máu sắp tới. Bạn có thể tạo mới hoặc xem chi tiết các sự kiện bên dưới.
                </Typography>
                <Box display="flex" justifyContent="flex-end" mb={2}>
                    <Button variant="contained" color="primary" size="large" sx={{ fontWeight: 600, px: 3, borderRadius: 2 }} onClick={handleOpen}>
                        + Tạo Lịch Hiến Máu
                    </Button>
                </Box>
                <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h6" textAlign="center" fontWeight={700} mb={2}>
                            Tạo Lịch Hiến Máu Mới
                        </Typography>
                        <BloodDonationScheduleCreate onClose={handleClose} />
                    </Box>
                </Dialog>
                <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 0 }}>
                    <Table sx={{ minWidth: 650, margin: 'auto' }} aria-label="simple table">
                        <TableHead sx={{backgroundColor : 'rgb(141, 193, 209)', fontWeight: 'bold'}}>
                            <TableRow >
                                <TableCell sx={{fontWeight: 'bold'}}>Tiêu Đề</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Địa Chỉ</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Ngày Hoạt Động</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Thời Gian</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Số Lượng Đăng Ký</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Tối Đa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {schedule.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#e3f2fd' } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell >{item.address}</TableCell>
                                    <TableCell >{item.operatingDate}</TableCell>
                                    <TableCell >{"Từ " + item.startTime + " Đến " + item.endTime}</TableCell>
                                    <TableCell >{item.numberRegister}</TableCell>
                                    <TableCell >{item.capcity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}