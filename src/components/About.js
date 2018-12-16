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
    width: '70vw',
    height: '50vh',
    margin: 'auto',
    display: 'table',
    padding: '150px',
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
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Grid container spacing={24} style={{
            display: 'inline',
            }}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  dignissim dui sit amet purus pulvinar, a malesuada orci sagittis.
                  Integer id ligula a purus ultricies scelerisque et id ligula.
                  Sed vel tellus nulla. Nam in sem in eros blandit porta. Cras non
                  finibus est. Praesent sit amet ligula ac lacus tristique sodales
                  ac venenatis tellus. Suspendisse in feugiat enim, non tempor magna.
                   Orci varius natoque penatibus et magnis dis parturient montes,

                  Nunc ac est ex. Sed sed eros at magna blandit ornare nec non nulla. Curabitur
                  suscipit, mi malesuada mollis vehicula, nisl neque laoreet est, a placerat nisi
                  justo dictum tortor. Fusce fermentum, odio ut bibendum tincidunt, velit mauris
                  lacinia ipsum, vitae feugiat elit tellus sed augue. Donec cursus leo lorem, sed
                   consectetur metus rutrum sed. Vivamus quis lectus eget turpis facilisis pretium
                   eget faucibus velit. Sed luctus mi elit, dapibus pulvinar nibh pretium sed. Aliquam
                   sed urna at tortor faucibus scelerisque vitae ac leo. Fusce tincidunt sit amet nisl
                   s suscipit
                  bibendum. Praesent sit amet ullamcorper tortor.

                  Pellentesque posuere ex ex, vel vestibulum sem feugiat sit amet. Donec tortor velit,
                  vehicula quis volutpat quis, maximus et leo. Vivamus malesuada eros felis, a
                  tempor mauris pretium in. Morbi tincidunt nisi tellus, et ultrices augue fringilla
                  eu. Nam eu odio molestie nisl rutrum euismod. Vivamus rhoncus egestas odio sagittis
                   egestas. Ut lacinia blandit risus, eget bibendum ante eleifend in. Quisque eu mattis
                   dui. Nam a tempus libero, quis sagittis urna. Phasellus eget aliquam felis. Phasellus
                   eget dolor et eros tincidunt commodo ac et risus. Sed tincidunt et augue eget finibus.
                   fermentum interdum. Pellentesque urna neque, porta eu justo at, feugiat molestie
                   neque.
                </Fade>


              </Typography>
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
