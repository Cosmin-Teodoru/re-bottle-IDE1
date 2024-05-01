import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo_only from './logo_only_inverted.png'
import { Avatar, Menu, MenuItem, Slide, Tab, Tabs, Tooltip, styled, useMediaQuery, useScrollTrigger } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SpaIcon from '@mui/icons-material/Spa';
import MapIcon from '@mui/icons-material/Map';
const drawerWidth = 240;
const navItems = ['Home','Shop','Environment', 'Map'];
const settings = [ 'Account', 'Logout'];

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: 'rgba(255, 255, 255, 0.7)',
      '&.Mui-selected': {
        color: '#fff',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    }),
  );
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            Re:Bottle
        </Typography>
        <Divider />
        {/* <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List> */}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
//   const [value, setValue] = React.useState(0);
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar component="nav" sx={{bgcolor: 'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo_only} alt="Logo" height={30} style={{marginRight: 5}}/>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow:1, display:  'block', fontWeight: 'bold' }}
          >
            RE:BOTTLE
          </Typography>
          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'inherit' }}>
                {item}
              </Button>
            ))}
          </Box> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sx={{ width: 35, height: 35 }}/>
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <StyledTabs centered
                value={props.tabVal}
                onChange={props.tabChange}
                aria-label="icon position tabs example"
                role="navigation"
            >
                <StyledTab icon={<HomeIcon />} iconPosition="start" label="Home" {...props.a11yProps(0)}/>
                <StyledTab icon={<ShoppingBagIcon />} iconPosition="start" label="Shop" {...props.a11yProps(1)}/>
                <StyledTab icon={<SpaIcon />} iconPosition="start" label="Environment"{...props.a11yProps(2)}/>
                <StyledTab icon={<MapIcon />} iconPosition="start" label="Map"{...props.a11yProps(3)}/>
            </StyledTabs>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <StyledTabs centered
                value={props.tabVal}
                onChange={props.tabChange}
                aria-label="icon position tabs example"
                role="navigation"
                fullwidth
            >
                <StyledTab icon={<HomeIcon />} iconPosition="start" aria-label="Home" {...props.a11yProps(0)}/>
                <StyledTab icon={<ShoppingBagIcon />} iconPosition="start" aria-label="Shop" {...props.a11yProps(1)}/>
                <StyledTab icon={<SpaIcon />} iconPosition="start" aria-label="Environment"{...props.a11yProps(2)}/>
                <StyledTab icon={<MapIcon />} iconPosition="start" aria-label="Map"{...props.a11yProps(3)}/>
            </StyledTabs>
        </Box>
      </AppBar>
      </HideOnScroll>
      <Toolbar/>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
        {/* <div style={{position: 'relative', top: 0}}>
            <Tabs centered
                value={value}
                onChange={handleChange}
                aria-label="icon position tabs example"
            >
                <Tab icon={<PhoneIcon />} iconPosition="start" label="Information" />
                <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="Shop" />
                <Tab icon={<FavoriteIcon />} iconPosition="start" label="Environment" />
                <Tab icon={<PersonPinIcon />} iconPosition="start" label="Map" />
            </Tabs>
        </div> */}
       
    </Box>
  );
}

export default DrawerAppBar;