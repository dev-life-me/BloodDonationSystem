import { Box, Container, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
    return (
        <div>
            <Box bgcolor={"gray"} maxWidth="100%" height={50} display="flex" justifyContent="center" alignItems="center" color={"white"}>
                
                <img src="logo\logo.png" alt="Blood Donation Center Logo" style={{ height: 60, marginRight: 10  }} />   
                <Typography variant="h6" component="div">
                    BLOOD DONATION CENTER
                </Typography>
            </Box>
            <div style={{ padding: 20, backgroundColor: 'gray', display: 'flex', flexDirection: 'column', color: 'white' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, borderBottom: '2px solid white', width: '100%' }}>
                    LIÊN HỆ
                </Typography>
                {/* TT Hiến Máu Nhân Đạo */}
                <div style={{ display: 'flex', width: '100%', marginTop: 16 }}>
                    {/* địa chỉchỉ */}
                    <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>TT Hiến Máu Nhân Đạo</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                466 Nguyễn Tri Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí Minh
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                106 Thiên Phước, Phường 9, Tân Bình, Thành phố Hồ Chí Minh
                            </Typography>
                        </Box>
                    </div>
                    {/* sdt */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 24 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Liên hệ giờ hành chính
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            <a href="tel:02838685509" style={{ color: 'white', textDecoration: 'underline' }}>028 3868 5509</a><br />
                            <a href="tel:02838685507" style={{ color: 'white', textDecoration: 'underline' }}>028 3868 5507</a>
                        </Typography>
                    </div>
                </div>
                {/* Bệnh viện BTH */}
                <div style={{ display: 'flex', width: '100%', marginTop: 24 }}>
                    <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>Bệnh viện BTH</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                24 Nguyễn Thị Diệu, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh
                            </Typography>
                        </Box>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 24 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Liên hệ giờ hành chính
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            <a href="tel:02839571342" style={{ color: 'white', textDecoration: 'underline' }}>028 39571342</a><br />
                            <a href="tel:02839557858" style={{ color: 'white', textDecoration: 'underline' }}>028 39557858</a>
                        </Typography>
                    </div>
                </div>
                {/* TT truyền máu Chợ Rẫy */}
                <div style={{ display: 'flex', width: '100%', marginTop: 24 }}>
                    <div style={{ flex: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: 2 }}>TT truyền máu Chợ Rẫy</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh
                            </Typography>
                        </Box>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 24 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Liên hệ giờ hành chính
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            <a href="tel:02839555885" style={{ color: 'white', textDecoration: 'underline' }}>028 39555885</a>
                        </Typography>
                    </div>
                </div>
                <Typography
                    variant="body2"
                    sx={{ marginTop: 4, marginBottom: 2 }}
                    style={{ textAlign: 'center' }}
                >
                    Blood Donation Center là một tổ chức phi lợi nhuận, hoạt động vì cộng đồng, với sứ mệnh kết nối những người hiến máu và những người cần máu.
                </Typography>
            </div>
            <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Typography variant="body1" color="textSecondary" align="center">
                    © 2025 Blood Donation Center. All rights reserved.
                </Typography>
            </Container>
        </div>
    );
}