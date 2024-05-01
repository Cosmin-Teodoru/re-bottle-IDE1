import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    height:'100px',
    backgroundColor: '#000',
    color: '#fff',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

const BlackMuiFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1"></Typography>
      </Container>
    </footer>
  );
};

export default BlackMuiFooter;
