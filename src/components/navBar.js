import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';

const styles = {
  root: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  appBar: {
    transition: 'all .5s',
    background: 'transparent',

  },
  transparentBar: {
    background: 'rgba(246,241,237, 0.8)',
  },
  grow: {
    flexGrow: 1,
    fontFamily: "'Slabo 27px', serif",
    fontSize: '2rem',
    fontWeight: 500,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
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
})

function NavBar(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={props.onTop ? classes.appBar : [classes.appBar, classes.transparentBar]}>
          <Toolbar>
            <Typography variant="h6" color={props.onTop ? 'primary' : "inherit"} className={classes.grow}>
              C K
            </Typography>
            <Typography color={props.onTop ? 'primary' : "inherit"} className='navBarButton'>
              <FontAwesomeIcon
                icon={faLinkedin}
                size='2x'
                className='navBarButton'
                onClick={() => {
                  window.open('https://www.linkedin.com/in/connorkent1/');
                }}
              />
          </Typography>

          <Typography color={props.onTop ? 'primary' : "inherit"} className='navBarButton'>
            <FontAwesomeIcon
              icon={faGithubSquare}
              size='2x'
              className='navBarButton'
              onClick={() => {
                window.open('https://github.com/connorkent21');
              }}
            />
        </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>

  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
