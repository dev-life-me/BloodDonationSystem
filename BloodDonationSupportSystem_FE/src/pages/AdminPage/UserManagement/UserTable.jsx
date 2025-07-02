import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const STATUS_OPTIONS = ["HOẠT ĐỘNG", "BỊ CẤM", "VÔ HIỆU HÓA"];

const FAKE_USERS = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    phoneNumber: "0901234567",
    gender: "Nam",
    role: "member",
    address: "123 Lê Lợi, Quận 1, TP.HCM",
    bloodType: "A+",
    status: "HOẠT ĐỘNG",
  },
  {
    id: 2,
    name: "Trần Thị B",
    phoneNumber: "0912345678",
    gender: "Nữ",
    role: "staff",
    address: "456 Nguyễn Trãi, Quận 5, TP.HCM",
    bloodType: "O-",
    status: "BỊ CẤM",
  },
  {
    id: 3,
    name: "Lê Văn C",
    phoneNumber: "0923456789",
    gender: "Nam",
    role: "member",
    address: "789 Cách Mạng Tháng 8, Quận 3, TP.HCM",
    bloodType: "B+",
    status: "VÔ HIỆU HÓA",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    phoneNumber: "0934567890",
    gender: "Nữ",
    role: "staff",
    address: "321 Điện Biên Phủ, Quận Bình Thạnh, TP.HCM",
    bloodType: "AB-",
    status: "HOẠT ĐỘNG",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    phoneNumber: "0945678901",
    gender: "Nam",
    role: "member",
    address: "654 Trường Chinh, Quận Tân Bình, TP.HCM",
    bloodType: "O+",
    status: "HOẠT ĐỘNG",
  },
  {
    id: 6,
    name: "Đặng Thị F",
    phoneNumber: "0956789012",
    gender: "Nữ",
    role: "staff",
    address: "987 Lý Thường Kiệt, Quận 10, TP.HCM",
    bloodType: "A-",
    status: "BỊ CẤM",
  },
];

const UserTable = () => {
  const [users, setUsers] = useState(FAKE_USERS);
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Họ tên", width: 150 },
    { field: "phoneNumber", headerName: "Số điện thoại", width: 150 },
    { field: "gender", headerName: "Giới tính", width: 100 },
    { field: "role", headerName: "Vai trò", width: 120 },
    { field: "address", headerName: "Địa chỉ", width: 300 },
    { field: "bloodType", headerName: "Nhóm máu", width: 120 },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 180,
      renderCell: (params) => {
        const { id, status } = params.row;
        return (
          <Select
            value={STATUS_OPTIONS.includes(status) ? status : ""}
            onChange={(e) => handleStatusChange(id, e.target.value)}
            variant="standard"
            fullWidth
            sx={{ fontWeight: 600, color: status === 'HOẠT ĐỘNG' ? 'green' : status === 'BỊ CẤM' ? 'red' : 'orange' }}
          >
            {STATUS_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        );
      },
    },
  ];

  const removeVietnameseTones = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const filteredUsers = users.filter((user) => {
    const matchRole = roleFilter === "all" || user.role === roleFilter;
    const name = removeVietnameseTones(user.name || "");
    const phone = user.phoneNumber || "";
    const keyword = removeVietnameseTones(searchText);

    const matchSearch =
      name.includes(keyword) || phone.includes(searchText);
    return matchRole && matchSearch;
  });

  return (
    <Box sx={{ p: 2, background: '#f5f6fa', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 1200, margin: '32px auto' }}>
        <Typography variant="h5" textAlign={'center'} fontWeight={700} mb={1}>
          Quản Lý Người Dùng
        </Typography>
        <Typography variant="subtitle1" textAlign={'center'} color="text.secondary" mb={3}>
          Tìm kiếm, lọc và cập nhật trạng thái tài khoản người dùng trong hệ thống.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="role-filter-label">Loại tài khoản</InputLabel>
            <Select
              labelId="role-filter-label"
              value={roleFilter}
              label="Loại tài khoản"
              onChange={handleRoleChange}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="member">Member</MenuItem>
              <MenuItem value="staff">Staff</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Tìm kiếm theo tên hoặc SĐT"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ width: 500 }}
          />
        </Box>

        <Paper sx={{ width: "100%", overflowX: "auto", boxShadow: 0 }}>
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            loading={loading}
            getRowId={(row) => row.id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            disableColumnMenu
            sx={{
              '& .MuiDataGrid-row:hover': {
                backgroundColor: '#e3f2fd',
              },
              borderRadius: 2,
            }}
          />
        </Paper>
      </Paper>
    </Box>
  );
};

export default UserTable;