import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowModes,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { AppBar, Toolbar, Typography, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";

export default function BloodDonationGrid() {
  const navigate = useNavigate();
  // Fake data for the table
  const [rows, setRows] = useState([
    {
      processId: 1,
      donationRegisId: 101,
      volumeMl: 450,
      status: "Đã đăng ký",
      bloodTest: "CHƯA KIỂM TRA",
      bloodTypeId: null,
    },
    {
      processId: 2,
      donationRegisId: 102,
      volumeMl: 350,
      status: "Đã đăng ký",
      bloodTest: "ĐÃ ĐẠT",
      bloodTypeId: "A+",
    },
    {
      processId: 3,
      donationRegisId: 103,
      volumeMl: 500,
      status: "Đã đăng ký",
      bloodTest: "KHÔNG ĐẠT",
      bloodTypeId: "O-",
    },
    {
      processId: 4,
      donationRegisId: 104,
      volumeMl: 400,
      status: "Đã đăng ký",
      bloodTest: "CHƯA KIỂM TRA",
      bloodTypeId: null,
    },
    // Additional fake data
    {
      processId: 5,
      donationRegisId: 105,
      volumeMl: 300,
      status: "Đã đăng ký",
      bloodTest: "ĐÃ ĐẠT",
      bloodTypeId: "B-",
    },
    {
      processId: 6,
      donationRegisId: 106,
      volumeMl: 420,
      status: "Đã đăng ký",
      bloodTest: "KHÔNG ĐẠT",
      bloodTypeId: "AB+",
    },
    {
      processId: 7,
      donationRegisId: 107,
      volumeMl: 380,
      status: "Đã đăng ký",
      bloodTest: "ĐÃ ĐẠT",
      bloodTypeId: "O+",
    },
    {
      processId: 8,
      donationRegisId: 108,
      volumeMl: 410,
      status: "Đã đăng ký",
      bloodTest: "CHƯA KIỂM TRA",
      bloodTypeId: null,
    },
    {
      processId: 9,
      donationRegisId: 109,
      volumeMl: 360,
      status: "Đã đăng ký",
      bloodTest: "ĐÃ ĐẠT",
      bloodTypeId: "AB-",
    },
    {
      processId: 10,
      donationRegisId: 110,
      volumeMl: 390,
      status: "Đã đăng ký",
      bloodTest: "KHÔNG ĐẠT",
      bloodTypeId: "B+",
    },
  ]);
  const [rowModesModel, setRowModesModel] = useState({});

  const vietnameseText = {
    columnMenuSortAsc: "Sắp xếp tăng dần",
    columnMenuSortDesc: "Sắp xếp giảm dần",
    columnMenuFilter: "Lọc",
    columnMenuHideColumn: "Ẩn cột",
    columnMenuManageColumns: "Quản lý cột",
    noRowsLabel: "Không có dữ liệu",
    loadingOverlayLabel: "Đang tải...",
    toolbarColumns: "Cột",
    toolbarFilters: "Bộ lọc",
    toolbarExport: "Xuất",
  };

  // 3. các api Xử lý cập nhật
  const processRowUpdate = async (newRow) => {
    const { bloodTest, bloodTypeId } = newRow;
    const validBloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    if (bloodTest === "ĐÃ ĐẠT" && !validBloodTypes.includes(bloodTypeId)) {
      throw new Error("Bạn phải chọn nhóm máu khi đã kiểm tra!");
    }
    if (bloodTest === "KHÔNG ĐẠT" && !validBloodTypes.includes(bloodTypeId)) {
      throw new Error("Bạn phải chọn nhóm máu khi đã kiểm tra dù không đạt!");
    }

    // Update local state only
    setRows((prevRows) =>
      prevRows.map((row) => (row.processId === newRow.processId ? { ...newRow } : row))
    );

    if (newRow.bloodTest === "ĐÃ ĐẠT" && newRow.bloodTypeId) {
      alert("Đã thêm vào kho máu!");
    } else if (newRow.bloodTest === "KHÔNG ĐẠT") {
      alert("Cập nhật trạng thái thành công");
    }
    return { ...newRow };
  };

  // 5. Lưu thay đổi
  const handleSaveClick = (id) => async () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View },
    }));
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const handleRowModesModelChange = (newModel) => {
    setRowModesModel(newModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const columns = [
    {
      field: "processId",
      headerName: "Mã hồ sơ xử lí",
      width: 200,
      filterable: false,
    },
    {
      field: "donationRegisId",
      headerName: "Mã đăng kí hiến máu",
      width: 200,
      filterable: false,
      renderCell: (params) => <span>{params.value || "-"}</span>,
    },
    {
      field: "volumeMl",
      headerName: "Dung tích (ml)",
      width: 150,
      filterable: false,
    },
    ,
    {
      field: "status",
      headerName: "Trạng thái hiến",
      width: 150,
      filterable: false,
    },
    {
      field: "bloodTest",
      headerName: "Kiểm tra",
      width: 150,
      editable: true,
      filterable: false,
      renderEditCell: (params) => {
        const { id, field, value, api } = params;

        const handleChange = (event) => {
          api.setEditCellValue({ id, field, value: event.target.value });
        };

        return (
          <Select
            key={id}
            value={value || ""}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={{ height: 50 }}
          >
            {["CHƯA KIỂM TRA", "ĐÃ ĐẠT", "KHÔNG ĐẠT"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        );
      },
    },

    {
      field: "bloodTypeId",
      headerName: "Nhóm máu",
      width: 150,
      editable: true,
      filterable: false,      
      valueFormatter: (params) => {
        return params ?? "-";
      },
    
      renderEditCell: (params) => {
        const { id, field, value, api } = params;
    
        const handleChange = (event) => {
          const selectedValue = event.target.value;
          api.setEditCellValue({
            id,
            field,
            value: selectedValue === "null" ? null : selectedValue,
          });
        };
    
        return (
          <Select
            key={id}
            value={value ?? "null"}
            onChange={handleChange}
            fullWidth
            size="small"
            sx={{ height: 50 }}
          >
            <MenuItem value="null">-</MenuItem>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        );
      },
    }
    
    ,
    {
      field: "actions",
      type: "actions",
      headerName: "Thao tác",
      filterable: false,
      width: 130,
      getActions: ({ id }) => {
        const isEditing = rowModesModel[id]?.mode === GridRowModes.Edit;
        return isEditing
          ? [
              <Tooltip title="Lưu" key="save"><GridActionsCellItem
                icon={<SaveIcon />}
                label="Lưu"
                onClick={handleSaveClick(id)}
              /></Tooltip>,
              <Tooltip title="Huỷ" key="cancel"><GridActionsCellItem
                icon={<CancelIcon />}
                label="Huỷ"
                onClick={handleCancelClick(id)}
              /></Tooltip>,
            ]
          : [
              <Tooltip title="Sửa" key="edit"><GridActionsCellItem
                icon={<EditIcon />}
                label="Sửa"
                onClick={handleEditClick(id)}
              /></Tooltip>,
            ];
      },
    },
  ];

  return (
    <Box sx={{ p: 2, background: '#f5f6fa', minHeight: '100vh' }}>
      {/* <AppBar position="static" color="default" elevation={1} sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Kho máu</Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar> */}
      <Paper elevation={3} sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
          Quản lý kho máu
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Dưới đây là danh sách các hồ sơ xử lý máu. Bạn có thể chỉnh sửa trạng thái kiểm tra và nhóm máu trực tiếp trên bảng.
        </Typography>
        <Box sx={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.processId} 
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={(err) => alert(err.message)}
            localeText={vietnameseText}
            disableColumnSelector
            pagination
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 9 } },
            }}
            density="compact"
            sx={{
              '& .MuiDataGrid-row:hover': {
                backgroundColor: '#e3f2fd',
              },
              borderRadius: 2,
              boxShadow: 1,
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
