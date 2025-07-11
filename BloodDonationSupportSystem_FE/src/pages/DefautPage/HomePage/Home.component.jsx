import { Box, Container, Typography, Grid, Paper, TextField, Button, Dialog } from "@mui/material";
import { useState } from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import BloodInformation from "./HomePageDetails/BloodInformation";
import Blog from "./HomePageDetails/Blog";
import Banner from "./HomePageDetails/SlideShow";
import DonationTips from "./HomePageDetails/DonationTip";
import ImportantNotes from '../../../components/ImportantNotes';
import BloodDonationRegister from "./HomePageDetails/BloodDonationRegister";
import BloodCompatibility from "../../../components/BloodCompatibility";
import EmergencyPage from "../EmergencyPage/EmergencyPage";

export default function Home() {
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <>
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Box
          sx={{
            width: '100%',
            margin: '0 auto',
            borderRadius: 2,
            height: 'auto',
          }}
        >
          <Banner />
        </Box>
      </Container>



      {/* <Box sx={{ backgroundColor: '#0D47A1', padding: 2, display: 'flex', justifyContent: 'center' }}>
        <DateSearch />
      </Box> */}
   
        <BloodDonationRegister/>

        <EmergencyPage isEmbedded={true} />

      <Box sx={{m: 10}}>
        <BloodCompatibility/>
      </Box>

      <Box sx={{ marginTop: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        </Box>

        

        <Box
          component="section"
          sx={{
 
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" >
            <Container>             
              <BloodInformation></BloodInformation>
            </Container>
          </Typography>
        </Box>

        <Blog></Blog>

        <div className="relative min-h-screen w-full bg-blue-400/40">
            <div className="absolute inset-0 backdrop-blur-sm z-0" />
            <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4">
                <DonationTips></DonationTips>
            </div>
        </div>

        
      </Box>
    </>
  );
}
