import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import logo from './logo_no_bkg.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import shop_hero from './shop_hero.png'
import bottle_1 from './shop_bottle_1.png'
import bottle_2 from './shop_bottle_2.png'
import bottle_3 from './shop_bottle_3.png'
import bottle_4 from './shop_bottle_4.png'
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${shop_hero})`,
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

function ShopPage() {
  const classes = useStyles();

  return (
    <div >
      {/* <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Blog
          </Typography>
        </Toolbar>
      </AppBar> */}
       <Box height={75}></Box>
      <Box className={classes.hero}>
        <img className={classes.hero_picture} src={logo} height={450} alt="Sip Smarter"/>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        
        <Typography variant="h4" className={classes.blogTitle}>
          RE:Fillable Bottle Shop 
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bottle_1}
                  title="Botlle"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Refillable bottle - Custom text
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Capacity: 0.5l
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Material: Aluminium
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Typography variant='h4' component="h2">
                    130,-
                </Typography>
                <Box>
                  <AddShoppingCartIcon color='info' fontSize='large'/>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bottle_2}                  
                  title="Bottle"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Refillable bottle - Rose design
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Capacity: 0.5l
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Material: Aluminium
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Typography variant='h4' component="h2">
                    100,-
                </Typography>
                <Box>
                  <AddShoppingCartIcon color='info' fontSize='large'/>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bottle_3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Refillable bottle - Cartoon design
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Capacity: 0.25l
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Material: Aluminium
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Typography variant='h4' component="h2">
                    90,-
                </Typography>
                <Box>
                  <AddShoppingCartIcon color='info' fontSize='large'/>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={bottle_4}                  
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Refillable bottle - Custom design
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Capacity: 0.5l
                  </Typography>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Material: Aluminium
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Typography variant='h4' component="h2">
                    150,-
                </Typography>
                <Box>
                  <AddShoppingCartIcon color='info' fontSize='large'/>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default ShopPage;