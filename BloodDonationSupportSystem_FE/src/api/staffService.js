export async function searchDonorsApi(filters) {
//Data
  const mockData = [
    {
      donorName: "Trương Quốc Nhựt",
      bloodType: "A+",
      lastDonationDate: "2024-12-01",
      phoneNumber: "0332799453",
    },
    {
      donorName: "Trần Thị Hằng",
      bloodType: "O-",
      lastDonationDate: "2025-01-15",
      phoneNumber: "0987654321",
    },
    {
      donorName: "Lê Văn Chương",
      bloodType: "B+",
      lastDonationDate: "2025-03-10",
      phoneNumber: "0909123456",
    },
    {
      donorName: "Phạm Thị Mai",
      bloodType: "O+",
      lastDonationDate: "2025-02-20",
      phoneNumber: "0911222333",
    },
  ];

  // Lọc theo nhóm máu nếu có chọn
  const filtered = filters.bloodTypes.length
    ? mockData.filter(d => filters.bloodTypes.includes(d.bloodType))
    : mockData;

  // Giả lập delay API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { data: filtered } });
    }, 800);
  });
}