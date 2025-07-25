import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate, useLocation } from 'react-router-dom';





function AppBarHeader() {
  //'Home', 'News', 'q-a', 'Contact'
  const pages = [
    {
      title: "Trang Chủ",
      path: "/home"
    }, {
      title: "Tin Tức",
      path: "/news"
    },
    {
      title: "Hỏi - Đáp",
      path: "/q-a"
    }, {
      title: "Liên Hệ",
      path: "/contact"
    }
  ];
  // Register User
  const manage = [
    { title: "Đơn Đăng Ký", path: "/user/blood-donation-register" },
    { title: "Lịch Sử Hiến Máu", path: "/user/profile/history" }
  ]
  //'Profile', 'Account', 'Logout'
  const settings = [
    {
      title: "Hồ Sơ",
      path: "user/profile"
    },
  ]
  // Get User Infor fake API. If have real API will decode TOkEN to GET Name and Role to Auth.
  //  if get Token is null will dont display permission of member like avata name
  const [user, setUser] = useState({
    fullName: "Trương Anh Tuấn",
    role: "member"
  });
  // handle Link

  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate('/login')
  };
  const handleClickSignup = () => {
    navigate('/register')
  };
  const handleLogout = () => {
    setUser(null);
    navigate('/')
  }



  //  handle UI
  const location = useLocation();
  const allItems = [...pages, ...(user ? manage : [])];
  const selectedItemCurrent = allItems.find((item) => location.pathname.startsWith(item.path))?.title ?? 'Trang Chủ';

  const [selectedItem, setSelectedItem] = useState(selectedItemCurrent);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
return (
    <AppBar position='fixed' sx={{ bgcolor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          {/* logo */}
          <Box sx={{ margin: "10px 50px 10px 10px", display: 'flex', alignItems: 'center', gap: 1, mr: 4 }}>
            <img src="/logo/logo.png" alt="Logo" style={{ height: 60 }} />
            <Typography color="error" variant="h6">Trung Tâm Hiến Máu</Typography>
          </Box>
          {/* display menu icon and menu small screen*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            {/* menu  */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(({ title, path }) => (

                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: "black" }} to={path} component={Link} >{title}</Typography>
                </MenuItem>
              ))}
              {user && manage.map(({ title, path }) => (

                <MenuItem key={title} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "black", textTransform: "none" }}
                    to={path}
                    component={Link}
                  >
                    {title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* display menu with large screen */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'left' }}>
            {pages.map(({ title, path }) => (
              <Button
                key={title}
                selected={selectedItem === title}
                onClick={() => { setSelectedItem(title); navigate(path) }}
                sx={{
                  my: 2, mx: 1, display: 'block', textAlign: 'center',
                  color: selectedItem === title ? 'black' : 'black',
                  borderBottom : '5px solid',
                  borderColor : selectedItem === title ? 'red' : 'transparent',
                  '&:hover': {
                    bgcolor:  '#f5f5f5'
                  }

                }}
                component={Link}
                to={path}
              >

                <Typography variant="h6" sx={{ textTransform: "none" }}>{title}</Typography>
              </Button>
            ))}
            {user && manage.map(({ title, path }) => (
              <Button
                key={title}
                selected={selectedItem === title}
                onClick={() => { setSelectedItem(title); navigate(path) }}
                sx={{
                  my: 2, mx: 1, display: 'block', textAlign: 'center',
                  color: selectedItem === title ? 'black' : 'black',
                  borderBottom : '5px solid',
                  borderColor : selectedItem === title ? 'red' : 'transparent',
                  '&:hover': {
                    bgcolor:  '#f5f5f5'
                  }

                }}
                component={Link}
                to={path}
              >
                <Typography variant="h6" sx={{ textTransform: "none" }}>{title}</Typography>

              </Button>
            ))}
          </Box>
          {/* display when login success */}

          {user && <Box sx={{ flexGrow: 0 }}>
            {/* display avatar */}
            <Tooltip title="Open settings">

              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ marginRight: '10px' }} />
                <Typography color='black'>{user.fullName}</Typography>
              </Button>
            </Tooltip>
            {/* display settings */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ title, path }) => (
                <MenuItem key={title} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center', textTransform: "none" }} component={Link} to={path}>{title}</Typography>
                </MenuItem>

              ))}
              <MenuItem key={"logout"} onClick={() => { handleCloseUserMenu(); handleLogout(); }}>
                <Typography
                  sx={{ textAlign: "center", textTransform: "none" }}
                >
                  Đăng Xuất
                </Typography>
              </MenuItem>
            </Menu>
          </Box>}

          {/* display box login or signup */}
          {!user && (
            <Button
              color="error"
              variant="contained"
              onClick={handleClickSignin}
              
            >
              <Typography variant="h6" sx={{ color: "error", textTransform: "none" }}>Đăng nhập</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );

}
export default AppBarHeader;
