import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2ABA75', top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOSAA Counsellors
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ p: 0 }}>
                <Button onClick={handleCloseNavMenu} sx={{ width: '100%', background: "white", p: 0, '&:hover': { backgroundColor: "#2ABA75" } }}><Link className='navLink2' to='/'>Home</Link></Button>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ p: 0 }}>
                <Button onClick={handleCloseNavMenu} sx={{ width: '100%', background: "white", p: 0, '&:hover': { backgroundColor: "#2ABA75" } }}><Link className='navLink2' to='/aboutUs'>About Us</Link></Button>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ p: 0 }}>
                <Button onClick={handleCloseNavMenu} sx={{ width: '100%', background: "white", p: 0, '&:hover': { backgroundColor: "#2ABA75" } }}><Link className='navLink2' to='/register'>Enroll Now</Link></Button>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ p: 0 }}>
                <Button onClick={handleCloseNavMenu} sx={{ width: '100%', background: "white", p: 0, '&:hover': { backgroundColor: "#2ABA75" } }}><Link className='navLink2' to='/contactUs'>Contact Us</Link></Button>

              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOSAA Counsellors
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={{ background: "#2ABA75", p: 0, '&:hover': { backgroundColor: "white" } }}><Link className='navLink' to='/'>Home</Link></Button>
            <Button onClick={handleCloseNavMenu} sx={{ background: "#2ABA75", p: 0, '&:hover': { backgroundColor: "white" } }}><Link className='navLink' to='/aboutUs'>About Us</Link></Button>
            <Button onClick={handleCloseNavMenu} sx={{ background: "#2ABA75", p: 0, '&:hover': { backgroundColor: "white" } }}><Link className='navLink' to='/register'>Enroll Now</Link></Button>
            <Button onClick={handleCloseNavMenu} sx={{ background: "#2ABA75", p: 0, '&:hover': { backgroundColor: "white" } }}><Link className='navLink' to='/contactUs'>Contact Us</Link></Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;