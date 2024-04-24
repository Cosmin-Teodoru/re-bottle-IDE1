import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Tab, Tabs } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import logo_only from './logo_only.png'
function DrawerAppBar(props) {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: '#FFFFFF' }}  position="static">
        <Toolbar>
          <Box>
            <img src={logo_only} alt="Logo" />
             <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}
              noWrap
            >
              RE:BOTTLE
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}
            >
              Sip smarter
            </Typography>
          </Box>
          
        </Toolbar>
          
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
      </AppBar>
    </Box>
  );
}

export default DrawerAppBar;
