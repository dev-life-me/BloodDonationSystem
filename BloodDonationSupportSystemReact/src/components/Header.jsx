import { AppBar, Container, Toolbar, Box, Avatar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = ({openLogin, setIsOpenLogin}) => {
    const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/login')
  };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>                          
                            <Typography variant="h6" component="div" >
                                My Application
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button
                            color="white"
                            variant="outlined"
                            onClick={handleClick}
                            sx={{
                                borderColor: 'white',
                                '&:hover': {
                                    borderColor: 'white',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            <Typography>Login</Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;