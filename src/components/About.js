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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faBriefcase, faUser, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';



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
    color: '#f6f1ed !important',
  },
  title: {
    color: '#f6f1ed !important',
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
    background: 'transparent',
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

            <Grid item xs={12} md={4}>
              <Paper className={`${classes.aboutMeCard} `}>
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                	<div className="flipper">
                		<div className="front skillsCard" >
                      <span className='cardLogoBG'>
                        <FontAwesomeIcon icon={faDesktop} size='4x' style={{
                            padding: '20px',
                          }}/>
                      </span>
                		</div>
                		<div className="back">
                      <div className='topOfCard'>
                        <ul className='cardList'>
                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>WEB DEV</p>
                              <ul className='cardList'>
                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>JavaScript</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>HTML5</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>CSS3</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>React.js</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Node.js</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Material-ui</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Bootstrap</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>MongoDB</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>RESTful API</p>
                                </li>

                              </ul>
                          </li>

                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Data</p>

                              <ul className='cardList'>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Python</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Data-Pipelines</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Web-Scraping</p>
                                </li>

                              </ul>
                          </li>

                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Backend</p>

                              <ul className='cardList'>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>C++</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Python</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>JavaScript</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>Java</p>
                                </li>

                                <li className='handPoint'>
                                  <p className='subBullet'><span style={{marginRight: '8px', color: '#915e5e'}}>-</span>C</p>
                                </li>



                              </ul>
                          </li>
                        </ul>
                      </div>

                      <div className='titleOfCard'>
                        SKILLS
                      </div>
                    </div>
                	</div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={`${classes.aboutMeCard} `}>
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                	<div className="flipper">
                		<div className="front skillsCard" >
                      <span className='cardLogoBG'>
                        <FontAwesomeIcon icon={faBriefcase} size='4x' style={{
                            padding: '20px',
                          }}/>
                      </span>
                		</div>
                		<div className="back">
                      <div className='topOfCard'>
                        <ul className='cardList'>
                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>DOZR</p>
                          </li>

                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Bank Of Montreal</p>
                          </li>

                          <li className='handPoint'>
                          <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>McGrathBoyd</p>
                          </li>
                        </ul>
                      </div>

                      <div className='titleOfCard'>
                        Workplaces
                      </div>
                    </div>
                	</div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={`${classes.aboutMeCard} `}>
                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                	<div className="flipper">
                		<div className="front skillsCard" >
                      <span className='cardLogoBG'>
                        <FontAwesomeIcon icon={faUser} size='4x' style={{
                            padding: '20px',
                          }}/>
                      </span>
                		</div>
                		<div className="back">
                      <div className='topOfCard'>
                        <ul className='cardList'>
                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Ping Pong</p>
                          </li>

                          <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Audio Production</p>
                          </li>

                          <li className='handPoint'>
                          <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Guitar</p>

                          <li className='handPoint'>
                          <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#915e5e'}}/></span>Hockey</p>
                          </li>


                          </li>
                        </ul>

                      </div>

                      <div className='titleOfCard'>
                        Hobbies
                      </div>
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
