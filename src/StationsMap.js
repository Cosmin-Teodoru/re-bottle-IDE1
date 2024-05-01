import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import hero from './map2.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: ` url(${hero})`,
     minHeight: "90vh",
    //height: '100%',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    // [theme.breakpoints.up("lg")]: {
    //   //fontSize: "3em",
    //   backgroundSize: "100% auto", // Adjust width to cover entire width, height auto (crops top and bottom)
    // },
    // [theme.breakpoints.up("md")]: {
    //   backgroundSize: "auto 100%", // Adjust height to cover entire height, width auto (crops sides)
    // },
    // [theme.breakpoints.down("sm")]: {
    //   // height: 300,
    //   fontSize: "3em"
    // }
  },
  // hero_picture: {
  //   height: 450,
  //   [theme.breakpoints.down("sm")]: {
  //     height: 200,
  //     fontSize: "3em"
  //   }
  // },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function MapPage() {
  const classes = useStyles();

  return (
    <div >
      <Box height={75}></Box>
      
      <Box className={classes.hero}>
        {/* <img className={classes.hero_picture} src={logo} alt="Sip Smarter"/> */}
      </Box>
      
    </div>
  );
}

export default MapPage;