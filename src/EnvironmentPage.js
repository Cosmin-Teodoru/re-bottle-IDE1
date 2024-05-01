import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import environment_hero from './environment_hero.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${environment_hero})`,
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
        <Box height={75}></Box>
      <Box className={classes.hero}>
        {/* <img className={classes.hero_picture} src={logo} height={450} alt="Sip Smarter"/> */}
        <Box>Environmental impact</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          How do we help protect the environment?
        </Typography>
        <Typography className={classes.blogBody} variant="h6">
          At ReBottle, we're on a mission to revolutionize the way we consume beverages while championing environmental sustainability. With a commitment to reducing single-use plastic waste, we've introduced refill stations across Denmark, strategically located in supermarkets for convenient access. Our refill stations offer a simple yet impactful solution: refillable bottles for water and sodas, minimizing the need for disposable containers.
        </Typography>
        <Typography className={classes.blogBody}variant="h6">
          We recognize the pressing global challenge posed by plastic pollution. Each year, millions of tons of plastic end up in landfills and oceans, devastating ecosystems and harming wildlife. By offering refillable options, ReBottle aims to mitigate this environmental crisis by significantly reducing the demand for single-use plastic bottles. Every refill made at our stations translates into one less plastic bottle in circulation, contributing to a cleaner, greener planet.
        </Typography>
        <Typography className={classes.blogBody}variant="h6">
          But our commitment doesn't stop there. In addition to providing refillable bottles and convenient refill stations, we're dedicated to promoting awareness and education about the importance of reducing plastic waste. Through community outreach programs and partnerships with environmental organizations, we strive to inspire and empower individuals to make sustainable choices in their everyday lives.
        </Typography>
        <Typography className={classes.blogBody}variant="h6">
          Moreover, ReBottle isn't just about reducing waste; it's about fostering a culture of conscious consumption. By encouraging customers to reuse their bottles and opt for refills instead of disposables, we're helping to cultivate a mindset of environmental stewardship and responsibility. Together, we can make a significant difference in preserving our planet for future generations.
        </Typography>
        <Typography className={classes.blogBody}variant="h6">
          Join us in our mission to protect the environment, one refill at a time. Together, we can create a more sustainable future for our planet and all its inhabitants.
        </Typography>
       
      </Container>
    </div>
  );
}

export default EnvironmentPage;