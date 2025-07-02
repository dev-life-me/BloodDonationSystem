import { Button, Box, List, ListItem, Paper, Stack, Typography, Dialog, DialogContent, DialogActions, DialogTitle,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import { useState } from "react";

export default function BloodDonationRequestPage() {
    // Expanded fake data for blood donation requests
    const bloodRequestList = [
        {
            id: 1,
            title: "Hiến Máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM",
            name: "Nguyễn Văn A",
            address: "123 Nguyễn Huệ, Tp. Hồ Chí Minh",
            bloodType: "A+",
            statusDonation: "Bình Thường"
        },
        {
            id: 2,
            title: "Hiến Máu - Trung Tâm Hiến Máu Nhân Đạo Tp.HCM",
            name: "Nguyễn Văn B",
            address: "123 Nguyễn Huệ, Tp. Hồ Chí Minh",
            bloodType: "A+",
            statusDonation: "Khẩn Cấp"
        },
        {
            id: 3,
            title: "Hiến Máu - Bệnh viện Chợ Rẫy",
            name: "Trần Thị C",
            address: "201B Nguyễn Chí Thanh, Quận 5, Tp. Hồ Chí Minh",
            bloodType: "O-",
            statusDonation: "Bình Thường"
        },
        {
            id: 4,
            title: "Hiến Máu - Bệnh viện Đại học Y Dược",
            name: "Lê Văn D",
            address: "215 Hồng Bàng, Quận 5, Tp. Hồ Chí Minh",
            bloodType: "B+",
            statusDonation: "Khẩn Cấp"
        },
        {
            id: 5,
            title: "Hiến Máu - Trung Tâm Hiến Máu Quận 1",
            name: "Phạm Thị E",
            address: "12 Lê Duẩn, Quận 1, Tp. Hồ Chí Minh",
            bloodType: "AB+",
            statusDonation: "Bình Thường"
        },
        {
            id: 6,
            title: "Hiến Máu - Bệnh viện Nhi Đồng 1",
            name: "Ngô Văn F",
            address: "341 Sư Vạn Hạnh, Quận 10, Tp. Hồ Chí Minh",
            bloodType: "O+",
            statusDonation: "Khẩn Cấp"
        },
        {
            id: 7,
            title: "Hiến Máu - Trung Tâm Hiến Máu Quận 7",
            name: "Đặng Thị G",
            address: "45 Nguyễn Thị Thập, Quận 7, Tp. Hồ Chí Minh",
            bloodType: "A-",
            statusDonation: "Bình Thường"
        },
        {
            id: 8,
            title: "Hiến Máu - Bệnh viện Bình Dân",
            name: "Võ Văn H",
            address: "371 Điện Biên Phủ, Quận 3, Tp. Hồ Chí Minh",
            bloodType: "B-",
            statusDonation: "Khẩn Cấp"
        }
    ];

    const [donationRequest, setDonationRequest] = useState(bloodRequestList);

    // handle filter 
    const [selectedStatus, setSelectedStatus] = useState('all');

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    // Lọc danh sách theo status
    const filteredData = donationRequest.filter((item) => {
        if (selectedStatus === 'all') return true;
        return item.statusDonation === selectedStatus;
    });

    //handle UI open Dialog with spec Item 
    const [openDialog, setOpenDialog] = useState(false);
    const [item, setItem] = useState(null);
    const handleOpenDialog = (item) => {
        setItem(item)
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <Box sx={{ p: 2, background: '#f5f6fa', minHeight: '100vh' }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 900, margin: '32px auto' }}>
                <Typography variant="h5" textAlign={'center'} fontWeight={700} mb={1}>
                    Danh Sách Yêu Cầu Hiến Máu
                </Typography>
                <Typography variant="subtitle1" textAlign={'center'} color="text.secondary" mb={3}>
                    Lọc và xử lý các yêu cầu hiến máu từ các trung tâm, bệnh viện. Chỉ chấp nhận các yêu cầu phù hợp.
                </Typography>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Trạng thái</InputLabel>
                    <Select value={selectedStatus} onChange={handleStatusChange} label="Trạng thái">
                        <MenuItem value="all">Tất cả</MenuItem>
                        <MenuItem value="Bình Thường">Bình Thường</MenuItem>
                        <MenuItem value="Khẩn Cấp">Khẩn Cấp</MenuItem>
                    </Select>
                </FormControl>
                <List>
                    {
                        filteredData.map((item, key) => (
                            <ListItem key={item.id} disablePadding sx={{ mb: 2, '&:hover': { backgroundColor: '#e3f2fd' }, borderRadius: 2 }}>
                                <Paper sx={{ width: '100%', p: 2, boxShadow: 2, borderRadius: 2 }}>
                                    <Stack direction={'row'} gap={1} alignItems={"center"} marginBottom={2}>
                                        <Typography variant="h6" sx={{ textTransform: "none", color: "red" }}>{item.title}</Typography>
                                        <Paper sx={{ padding: 0.5, bgcolor: item.statusDonation === "Khẩn Cấp" ? "red" : "lightgreen", color: item.statusDonation === "Khẩn Cấp" ? 'white' : 'black', fontWeight: 600 }}>{item.statusDonation}</Paper>
                                    </Stack>
                                    <Stack direction={'row'} gap={2} flexWrap={'wrap'} marginBottom={2}>
                                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                                            <Typography fontWeight={'bold'}>Họ Tên:</Typography>
                                            <Typography sx={{ textTransform: "none" }}>{item.name}</Typography>
                                        </Stack>
                                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                                            <Typography fontWeight={'bold'}>Địa Chỉ: </Typography>
                                            <Typography sx={{ textTransform: "none" }}>{item.address}</Typography>
                                        </Stack>
                                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                                            <Typography fontWeight={'bold'}>Nhóm Máu: </Typography>
                                            <Typography sx={{ textTransform: "none" }}>{item.bloodType}</Typography>
                                        </Stack>
                                    </Stack>
                                    <Button variant="outlined" sx={{ marginBottom: 2 }} onClick={() => handleOpenDialog(item)}>Xem Chi Tiết</Button>
                                    <Stack direction={'row'} gap={2}>
                                        <Button variant="contained" color="success" sx={{ fontWeight: 600, px: 3, borderRadius: 2 }}>Chấp Nhận</Button>
                                    </Stack>
                                </Paper>
                            </ListItem>
                        ))
                    }
                </List>
            </Paper>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Thông tin chi tiết</DialogTitle>
                <DialogContent>
                    {item && (
                       <Box></Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Đóng</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}