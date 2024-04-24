import {  AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import EnvironmentPage from "./EnvironmentPage";

export default function Home(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
    
    <div >
        <Box height={75}></Box>
      
    
        {/* <div>aa</div>
        <AppBar position="sticky">
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
            
        <Box height={3000}>
            <Typography>Abcdsd        dsfsdf sdfsdf  sdf s d fs  fsdfasdfasdf dsfsdfsdf sfdsdfsd  sdfsdfsdf  sd f sd</Typography>
        </Box> */}
    </div>
    )
}