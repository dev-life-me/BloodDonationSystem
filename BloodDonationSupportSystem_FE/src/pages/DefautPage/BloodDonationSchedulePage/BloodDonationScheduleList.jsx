import { useState } from "react";
import { Box } from "@mui/material";
import BloodeDonationEventCard from "./BloodDonationEventCard";


// Can need a fillter by date bar for user find easy 
export default function BloodDonationScheduleList () {
    // Fake data for blood donation events
    const [BloodDonationScheduleList] = useState([
        {
            id: 1,
            title: "Sự kiện hiến máu tại Đại học Quốc gia",
            address: "Đại học Quốc gia, TP.HCM",
            operatingDate: "2024-06-10",
            startTime: "08:00",
            endTime: "16:00",
            numberRegister: 120,
            capacity: 200
        },
        {
            id: 2,
            title: "Ngày hội hiến máu Quận 1",
            address: "Nhà Văn hóa Thanh Niên, Quận 1, TP.HCM",
            operatingDate: "2024-06-12",
            startTime: "07:30",
            endTime: "15:00",
            numberRegister: 80,
            capacity: 150
        },
        {
            id: 3,
            title: "Hiến máu cứu người tại Bệnh viện Chợ Rẫy",
            address: "Bệnh viện Chợ Rẫy, Quận 5, TP.HCM",
            operatingDate: "2024-06-15",
            startTime: "09:00",
            endTime: "17:00",
            numberRegister: 200,
            capacity: 250
        },
        {
            id: 4,
            title: "Sự kiện hiến máu cộng đồng Bình Thạnh",
            address: "UBND Quận Bình Thạnh, TP.HCM",
            operatingDate: "2024-06-18",
            startTime: "08:30",
            endTime: "14:00",
            numberRegister: 60,
            capacity: 100
        },
        {
            id: 5,
            title: "Ngày hội hiến máu mùa hè",
            address: "Công viên Lê Văn Tám, Quận 3, TP.HCM",
            operatingDate: "2024-06-20",
            startTime: "07:00",
            endTime: "12:00",
            numberRegister: 90,
            capacity: 120
        }
    ]);
    return ( 
        <Box margin={'100px'}>
            {BloodDonationScheduleList.map((item) => {
                return(<BloodeDonationEventCard key={item.id} item = {item}/>)
            })}
        </Box>
    );
}