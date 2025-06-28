import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { Box } from "@mui/material";


export default function ProfileLayout () {

    return(
        <Box>
            <ProfileSidebar/>
            
                <Outlet/>
        </Box>
    )
}