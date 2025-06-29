import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const tips = {
  shouldDo: {
    title: 'Nên:',
    color: "#009688",
    icon: (
      <Box
        component="img"
        src="https://giotmauvang.org.vn/assets/images/67860df7e4bd3ec1e05fabae6fd0eff1.png"
        alt="Nên"
        sx={{ width: 56, height: 56, objectFit: "contain", mr: 1 }}
      />
    ),
    items: [
      'Ăn nhẹ và uống nhiều nước (300-500ml) trước khi hiến máu.',
      'Đè chặt miếng bông gòn cầm máu nơi kim chích 10 phút, giữ băng keo cá nhân trong 4-6 giờ.',
      'Nằm và ngồi nghỉ tại chỗ 10 phút sau khi hiến máu.',
      'Nằm nghỉ đầu thấp, kê chân cao nếu thấy chóng mặt, mệt, buồn nôn.',
      'Chườm lạnh (túi chườm chuyên dụng hoặc cho đá vào khăn) chườm vết chích nếu bị sưng, bầm tím.',
    ],
    author: 'Bác sĩ Ngô Văn Tân\nTrưởng khoa Tiếp nhận hiến máu\nBệnh viện Truyền máu Huyết học',
  },
  shouldNotDo: {
    title: 'Không nên:',
    color: "#e53935",
    icon: (
      <Box
        component="img"
        src="https://giotmauvang.org.vn/assets/images/05ae43cac12c1988aefaeccd14d16b19.png"
        alt="Không nên"
        sx={{ width: 56, height: 56, objectFit: "contain", mr: 1 }}
      />
    ),
    items: [
      'Uống sữa, rượu bia trước khi hiến máu.',
      'Lái xe đi xa, khuân vác, làm việc nặng hoặc luyện tập thể thao gắng sức trong ngày lấy máu.',
    ],
    author: 'Bác sĩ Ngô Văn Tân\nTrưởng khoa Khoa Tiếp nhận hiến máu\nBệnh viện Truyền máu Huyết học',
  },
  caution: {
    title: 'Lưu ý:',
    color: "#ff9800",
    icon: (
      <Box
        component="img"
        src="https://giotmauvang.org.vn/assets/images/f42a60d74be97fcc76f4a23422fdc0a2.png"
        alt="Lưu ý"
        sx={{ width: 56, height: 56, objectFit: "contain", mr: 1 }}
      />
    ),
    items: [
      'Nếu phát hiện chảy máu tại chỗ chích:\nGiơ tay cao.\nLấy tay kia ấn nhẹ vào miếng bông hoặc băng dính.\nLiên hệ nhân viên y tế để được hỗ trợ khi cần thiết.',
    ],
    author: 'Bác sĩ Ngô Văn Tân\nTrưởng khoa Khoa Tiếp nhận hiến máu\nBệnh viện Truyền máu Huyết học',
  },
};

const TipCard = ({ tip }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 2, md: 3 },
      borderRadius: 3,
      border: `3px solid ${tip.color}`,
      bgcolor: "#fff",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      boxShadow: "0 4px 24px 0 rgba(23,72,134,0.08)",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      {tip.icon}
      <Typography variant="h6" fontWeight="bold" sx={{ color: tip.color, ml: 1, fontSize: 24 }}>
        {tip.title}
      </Typography>
    </Box>
    <Box sx={{ mb: 2 }}>
      {tip.items.map((item, idx) => (
        <Typography key={idx} variant="body1" sx={{ mb: 1, whiteSpace: "pre-line", fontSize: 17 }}>
          - {item}
        </Typography>
      ))}
    </Box>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ whiteSpace: "pre-line", fontWeight: 600, textAlign: "right", mt: "auto", fontSize: 15 }}
    >
      {tip.author}
    </Typography>
  </Paper>
);

const DonationTip = () => {
  return (
    <Box sx={{ py: 0, minHeight: 600 }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            mb: 4,
            color: "#1976d2",
            textAlign: "center",
            fontSize: { xs: 26, md: 36 },
            lineHeight: 1.2,
            letterSpacing: "-1px",
          }}
        >
            Những lời khuyên trước và sau khi hiến máu
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            width: "100%",
            minHeight: { md: 480, xs: "auto" },
            gap: { md: 4, xs: 2 }, 
          }}
        >
          {/* Nên */}
          <Box sx={{ flex: 7, display: "flex", flexDirection: "column" }}>
            <TipCard tip={tips.shouldDo} />
          </Box>
          {/* Không nên và lưu ý */}
          <Box
            sx={{
              flex: 7,
              display: "flex",
              flexDirection: "column",
              ml: { md: 0, xs: 0 },
              height: "100%",
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1, display: "flex", minHeight: 0 }}>
              <TipCard tip={tips.shouldNotDo} />
            </Box>
            <Box sx={{ flex: 1, display: "flex", minHeight: 0 }}>
              <TipCard tip={tips.caution} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DonationTip;
