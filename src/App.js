import './App.css';
import { HashRouter as Router, Route, Switch, Routes, Link } from 'react-router-dom';
import DrawerAppBar from './MenuBar';
import Home from './Home';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import EnvironmentPage from './EnvironmentPage';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import StationsMap from './StationsMap';
import BlackMuiFooter from './BlackFooter';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function App() {
  // const [value, setValue] = React.useState(0);
  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    
  <div>
    
    <DrawerAppBar tabVal={value} tabChange={handleChange} a11yProps={a11yProps}/>
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={value}
      onChangeIndex={handleChangeIndex}
    >
      <TabPanel value={value} index={0} dir={theme.direction}>
        <HomePage/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ShopPage/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <EnvironmentPage/>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <StationsMap/>
      </TabPanel>
    </SwipeableViews>
    <BlackMuiFooter/>
    {/* <Router>
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/shop" element={<ShopPage/>} />
        <Route exact path="/environment" element={<EnvironmentPage/>} />
        <Route exact path="/map" element={<Home/>} />
      </Routes>
    </Router> */}
  </div>
      

    
  );
}

export default App;
