import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";

const bloodTypes = [
  { value: "A_POSITIVE", label: "A+" },
  { value: "A_NEGATIVE", label: "A-" },
  { value: "B_POSITIVE", label: "B+" },
  { value: "B_NEGATIVE", label: "B-" },
  { value: "AB_POSITIVE", label: "AB+" },
  { value: "AB_NEGATIVE", label: "AB-" },
  { value: "O_POSITIVE", label: "O+" },
  { value: "O_NEGATIVE", label: "O-" },
];

const mockUsers = [
  {
    id: 1,
    fullname: "Nguyễn Văn Táo",
    bloodType: "A_POSITIVE",
    lastDonation: "3 tháng trước",
    phoneNumber: "0909199518",
  },
  {
    id: 2,
    fullname: "Nguyễn Văn Xoài",
    bloodType: "O_NEGATIVE",
    lastDonation: "1 tháng trước",
    phoneNumber: "0909199528",
  },
  {
    id: 3,
    fullname: "Nguyễn Văn Đào",
    bloodType: "AB_POSITIVE",
    lastDonation: "5 tháng trước",
    phoneNumber: "0909199538",
  },
  {
    id: 4,
    fullname: "Nguyễn Văn Mận",
    bloodType: "AB_POSITIVE",
    lastDonation: "2 tháng trước",
    phoneNumber: "0909199548",
  },
];

const FindDistancePage = () => {
  const [distance, setDistance] = useState(10);
  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleBloodTypeClick = (type) => {
    setSelectedBloodTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const handleSearch = () => {
    setSearched(true);
    // Lọc theo nhóm máu, có thể thêm lọc theo khoảng cách nếu có dữ liệu vị trí
    const filtered = mockUsers.filter((user) =>
      selectedBloodTypes.includes(user.bloodType)
    );
    setResults(filtered);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          p: 3,
          mb: 3,
          background: "#fff",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
          Khoảng cách tìm kiếm (km)
        </Typography>
        <Slider
          value={distance}
          onChange={(e, val) => setDistance(val)}
          min={1}
          max={50}
          step={1}
          valueLabelDisplay="auto"
          marks={[
            { value: 1, label: "1km" },
            { value: 25, label: "25km" },
            { value: 50, label: "50km" },
          ]}
          sx={{ mb: 3, maxWidth: 600 }}
        />

        <Typography sx={{ fontWeight: 500, mb: 1 }}>
          Nhóm máu cần tìm kiếm
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
          {bloodTypes.map((type) => (
            <Button
              key={type.value}
              variant={
                selectedBloodTypes.includes(type.value)
                  ? "contained"
                  : "outlined"
              }
              color={
                selectedBloodTypes.includes(type.value)
                  ? "primary"
                  : "inherit"
              }
              onClick={() => handleBloodTypeClick(type.value)}
              sx={{
                minWidth: 70,
                fontWeight: 600,
                borderRadius: 2,
                background: selectedBloodTypes.includes(type.value)
                  ? "#1976d2"
                  : "#fff",
                color: selectedBloodTypes.includes(type.value)
                  ? "#fff"
                  : "#1976d2",
                borderColor: "#1976d2",
                "&:hover": {
                  background: "#1976d2",
                  color: "#fff",
                },
              }}
            >
              {type.label}
            </Button>
          ))}
        </Stack>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: 48, fontWeight: 600, fontSize: 16, mt: 1 }}
          onClick={handleSearch}
        >
          TÌM KIẾM NGAY
        </Button>
      </Box>

      <Box>
        {searched && results.length === 0 && (
          <Typography sx={{ color: "#888", mb: 2 }}>
            Không tìm thấy người trong phạm vi.
          </Typography>
        )}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Họ tên</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Nhóm máu</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Lần hiến gần nhất</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Số điện thoại</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.length > 0 ? (
                results.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>
                      {user.bloodType
                        .replace("_POSITIVE", "+")
                        .replace("_NEGATIVE", "-")
                        .replace("_", " ")}
                    </TableCell>
                    <TableCell>{user.lastDonation}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                    sx={{ color: "#888" }}
                  >
                    {searched
                      ? "Bắt đầu tìm kiếm - Tìm kiếm trên nhóm máu và khoảng cách"
                      : "Bắt đầu tìm kiếm - Tìm kiếm trên nhóm máu và khoảng cách"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default FindDistancePage;
