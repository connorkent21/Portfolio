import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typing from 'react-typing-animation';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const styles = {
  main: {
    height: '100%',
    marginBottom: 0,
    boxShadow: '0 5px 14px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) inset',
    padding: '48px 24px',

  },
  paper: {
    padding: '32px',
    display: 'table-cell',
    verticalAlign: 'middle',
    background: 'transparent',
    color: 'white !important',
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '1.25px',
    fontFamily: "'Open Sans', sans-serif",
  },
  text: {
    fontSize: '1rem',
    fontFamily: "'Open Sans', sans-serif",
  },
  container: {
    height: '10%',
  }
};

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#c3bebb',
    },
    secondary: {
      main:'#191919'
    }
  },
});


function Footer(props) {
  const {classes} = props;
  return (
    <MuiThemeProvider theme={theme}>
      <main className={classes.main}>
        <Grid container spacing={24} className={classes.container}>
          <Grid item spacing xs={12}>
            <Typography className='footerOption' onClick={props.projectsLink}>
              Projects
            </Typography>
          </Grid>

          <Grid item spacing xs={12}>
            <Typography className='footerOption' onClick={props.aboutMeLink}>
              About Me
            </Typography>
          </Grid>

          <Grid item spacing xs={12}>
            <Typography className='footerOption' onClick={props.resumeLink}>
              Resume
            </Typography>
          </Grid>

          <Grid item spacing xs={12}>
            <Typography className='footerOption' onClick={props.contactLink}>
              Contact
            </Typography>
          </Grid>
        </Grid>
      </main>
    </MuiThemeProvider>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);
