import React from 'react';
import Modal from 'react-modal';
import ClipLoader from 'react-spinners/ClipLoader';
import { Block, Flex, Copy, Shadow } from './Base';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronRight, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



const styles = {
  main: {
    height: '20vh',
    width: '80vw',
    background: 'transparent',
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
  contactIcons: {
    fontSize: '150px',
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



function ContactModal(props){
  const { classes } = props;
return(
  <MuiThemeProvider theme={theme}>
    <Modal
      isOpen={props.showModal}
      onRequestClose={props.exitModal}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      ariaHideApp
      closeTimeoutMS={200}
      className="contactModal"
      overlayClassName="modal-overlay"
      style={{
        paddingRight: '0px !important',
        paddingLeft: '0px !important',
        width: '80%',
        display: props.display ? 'block' : 'none',
      }}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onclick={props.exitModal}
    >
        <Fade bottom big >
        <main className={classes.main}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={4}>
                <Typography className={`${classes.contactIcons}`}>
                  <a href='mailto:connorkent21@gmail.com' className='unstyledLink'>
                    <FontAwesomeIcon icon={faEnvelope} size='1x' className='contactIcon'/>
                      <Block className='appearOnHover'>
                        connorkent21@gmail.com
                      </Block>
                  </a>
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography className={`${classes.contactIcons}`}>
                  <a href='tel:506-380-0365' className='unstyledLink'>
                    <FontAwesomeIcon icon={faMobileAlt} size='1x' className='contactIcon' />
                    <Block className='appearOnHover'>
                      506-380-0365
                    </Block>
                  </a>
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography className={`${classes.contactIcons}`}>
                  <FontAwesomeIcon icon={faLinkedin} size='1x' className='contactIcon' onClick={() => {
                    window.open('https://www.linkedin.com/in/connorkent1/');
                  }}/>
                  <Block className='appearOnHover'>
                    Connor Kent
                  </Block>
                </Typography>
              </Grid>
            </Grid>
        </main>

      </Fade>

      </Modal>

  </MuiThemeProvider>
)};

ContactModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactModal);
