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
    display: 'inline',
    top: '25%',
  },
  paper: {
    padding: '20vh 10vw',

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
  aboutMeCard: {
    minHeight: '50vh',
    width: '100%',
    backgroundColor: 'white',
    padding: '12px',
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontFamily: "'Open Sans', sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f6f1ed',
    },
    secondary: {
      main:'#001f3f'
    }
  },
});


function About(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <main id='about' className={`${classes.main} aboutSection`}>
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant='h3' className={classes.title}>
                <Fade big left>
                  About Me...
                </Fade>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.text}>
                <Fade right big>
                  <span style={{width: '65%'}}>
                    Connor Kent is a Mechatronics Engineering undergraduate student at the University of Waterloo who's passion lies in
                    the development of efficient and elegant software design.
                  </span>
                </Fade>
              </Typography>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Paper className={classes.aboutMeCard}>
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                	<div className="flipper">
                		<div className="front" >
                      <span>
                        This is the front
                      </span>
                		</div>
                		<div className="back">
                      <span>
                        This is not the front
                      </span>
                    </div>
                	</div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Paper className={classes.aboutMeCard}>
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                	<div className="flipper">
                		<div className="front" >
                      <span>
                        This is the front
                      </span>
                		</div>
                		<div className="back">
                      <span>
                        This is not the front
                      </span>
                    </div>
                	</div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Paper className={classes.aboutMeCard}>
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                	<div className="flipper">
                		<div className="front" >
                      <span>
                        This is the front
                      </span>
                		</div>
                		<div className="back">
                      <span>
                        This is not the front
                      </span>
                    </div>
                	</div>
                </div>
              </Paper>
            </Grid>

          </Grid>
        </Paper>
      </main>

    </MuiThemeProvider>

  );

  About.propTypes = {
    classes: PropTypes.object.isRequired,
  };

}

  export default withStyles(styles)(About);
