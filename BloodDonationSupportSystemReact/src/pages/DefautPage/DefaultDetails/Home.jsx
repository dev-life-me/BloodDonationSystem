import { Box, Container, Typography } from "@mui/material";
import BloodTypeSearch from "../../../components/BloodTypeSearch";

export default function Home() {
    return (
        <>

            <Box sx={{ marginTop: 15 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h1">Trang chủ</Typography>
                </Box>
                <BloodTypeSearch/>
                <Box
                    component="section"
                    sx={{
                        padding: 2,
                        backgroundColor: 'white',
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-block', // hoặc bỏ display ở đây và set cho <a>
                        }}
                    >
                        <Box
                            component="a"
                            href="https://static.giotmauvang.org.vn/ihpstatic/GMV_HuongDanSuDung.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: 'inline-block', // ✅ vẫn đúng nghĩa inline-block
                                textDecoration: 'underline',
                                textDecorationColor: 'blue',
                                color: 'blue',
                                cursor: 'pointer',
                                transition: 'color 0.3s, textDecorationColor 0.3s',
                                '&:hover': {
                                    textDecorationColor: 'red',
                                    color: 'red',
                                },
                            }}
                        >
                            Xem hướng dẫn quy trình đăng ký hiến máu &gt;&gt;&gt; Tại đây
                        </Box>
                    </Box>
                </Box>
                <Box
                    component="section"
                    sx={{
                        padding: 2,
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2" sx={{ marginTop: 2 }}>
                        Title
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
