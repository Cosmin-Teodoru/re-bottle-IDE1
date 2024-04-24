import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import logo from './logo_no_bkg.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  hero_picture: {
    height: 450,
    [theme.breakpoints.down("sm")]: {
      height: 200,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  blogBody: {
    paddingBottom: theme.spacing(2)
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

function EnvironmentPage() {
  const classes = useStyles();

  return (
    <div >
      <Box className={classes.hero}>
        {/* <img className={classes.hero_picture} src={logo} height={450} alt="Sip Smarter"/> */}
        <Box>Environmental impact</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          How do we help protect the environment?
        </Typography>
        <Typography className={classes.blogBody} variant="h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et feugiat urna, tincidunt venenatis ipsum. Nunc et enim in ipsum commodo consectetur. Duis convallis lobortis venenatis. In luctus tempus lorem id vestibulum. Suspendisse sagittis orci in eros tempus, id lacinia felis maximus. Duis facilisis quam sed ligula scelerisque, et dapibus velit condimentum. Aenean lacinia aliquam tortor, ut venenatis felis porta ut. Donec iaculis vulputate aliquam. Donec tempus, lorem ac sollicitudin mollis, ligula dolor sagittis dolor, faucibus aliquet tellus ex et urna. Nullam suscipit, justo vel ornare semper, erat metus porttitor ligula, id vulputate ligula risus nec lectus. In ut nibh lacinia, cursus nisl et, porttitor nisi. Nunc ut convallis justo. In sit amet diam pharetra, dapibus justo eu, dapibus dui.
        </Typography>
        <Typography className={classes.blogBody}variant="h6">
Pellentesque hendrerit rutrum interdum. Aenean eleifend risus non orci mattis, sed luctus arcu tincidunt. Morbi consequat consequat sapien, a sodales lacus auctor non. Sed tempus nisi nec diam cursus iaculis. Fusce non ipsum ex. In id arcu at urna ornare dictum at et dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</Typography>
        <Typography className={classes.blogBody}variant="h6">
Ut mollis posuere facilisis. Morbi venenatis magna at nisl efficitur, nec rhoncus mauris ultrices. Duis imperdiet porttitor ipsum sed euismod. Cras viverra tempor dui. Duis nec rutrum libero, nec varius est. Aliquam laoreet congue luctus. Aliquam scelerisque enim purus, non porttitor mi ornare quis. Nulla varius felis vel libero euismod finibus.
</Typography>
        <Typography className={classes.blogBody}variant="h6">
Nunc nec scelerisque felis, eu luctus augue. Sed et lacus sit amet est elementum consectetur. Cras non nisi a velit laoreet mattis vitae vitae lacus. Donec pellentesque turpis sit amet quam egestas dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nec nibh ut libero accumsan auctor. Proin lobortis sodales orci et aliquet. Vivamus in tellus hendrerit, imperdiet leo semper, laoreet neque. Ut ac fermentum eros, a fermentum risus.
</Typography>
        <Typography className={classes.blogBody}variant="h6">
Suspendisse gravida urna lectus, vel dignissim felis posuere rhoncus. Donec a quam a odio elementum mollis. In faucibus sapien vitae finibus aliquam. Vestibulum ut felis nec odio dictum mollis. Nunc sem arcu, rhoncus eget felis sed, dignissim dictum lacus. Aliquam sit amet ex scelerisque, condimentum felis nec, tempor erat. Donec nec elit ac libero viverra vestibulum vel sit amet lectus. Curabitur eu dolor quis massa convallis tincidunt.
</Typography>
       
      </Container>
    </div>
  );
}

export default EnvironmentPage;