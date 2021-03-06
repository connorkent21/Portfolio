import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBriefcase, faUser, faChevronCircleRight, faTableTennis, faMusic, faHockeyPuck} from '@fortawesome/free-solid-svg-icons';
import { faSoundcloud} from '@fortawesome/free-brands-svg-icons';




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
    color: '#387aff !important',
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
      main: '#387aff',
    },
    secondary: {
      main:'#001f3f'
    }
  },
});


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };


    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(cardName) {
    let selectedCard = document.getElementById(cardName);
    console.log('this is the card that we got: ', selectedCard);
    selectedCard.classList.toggle('flip');
    selectedCard.classList.toggle('upScale');
  }


  render() {
    const { classes } = this.props;
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
                    <span className='aboutMeText' style={{width: '65%'}}>
                      Connor Kent is a Mechatronics Engineering undergraduate student at the University of Waterloo whose passion lies in
                      the development of efficient and elegant software design.
                    </span>
                  </Fade>
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper className={`${classes.aboutMeCard} `}>
                  <div id='skillsCardAbout' className="flip-container pointer" ontouchstart="this.classList.toggle('hover');" onClick={() => {
                      this.flipCard('skillsCardAbout');
                    }}>
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
                              <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>WEB DEV</p>
                                <ul className='cardList'>
                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>JavaScript</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>React.js</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>MobX</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>CSS3/SCSS</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Node.js</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>GraphQL</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Python</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>HTML5</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Material-ui</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Bootstrap</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>JQuery</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>MongoDB</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>MySQL</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>REST API</p>
                                  </li>

                                </ul>
                            </li>

                            <li className='handPoint'>
                              <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Data</p>

                                <ul className='cardList'>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Python</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Data-Pipelines</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Web-Scraping</p>
                                  </li>

                                </ul>
                            </li>

                            <li className='handPoint'>
                              <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Backend</p>

                                <ul className='cardList'>


                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>GoLang</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Python</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>C++</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>JavaScript</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Java</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>C</p>
                                  </li>



                                </ul>
                            </li>

                            <li className='handPoint'>
                              <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Mobile</p>

                                <ul className='cardList'>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>React Native</p>
                                  </li>

                                  <li className='handPoint'>
                                    <p className='subBullet'><span style={{marginRight: '8px'}}>-</span>Java</p>
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
                  <div id='skillsCardWorkplaces' className="flip-container pointer" ontouchstart="this.classList.toggle('hover');" onClick={() => {
                      this.flipCard('skillsCardWorkplaces');
                    }}>
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
                              <p style={{marginBottom: '0px'}}><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Chatkit</p>
                                <ul className='cardList'>

                                  <li className='handPoint'>
                                    <p className='subBullet' style={{marginTop: '4px'}}><span style={{marginRight: '8px'}}>-</span>Full-Stack Software Developer</p>
                                  </li>

                                </ul>
                            </li>
                            <li className='handPoint'>
                              <p style={{marginBottom: '0px'}}><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>DOZR</p>
                                <ul className='cardList'>

                                  <li className='handPoint'>
                                    <p className='subBullet' style={{marginTop: '4px'}}><span style={{marginRight: '8px'}}>-</span>Software Engineer</p>
                                  </li>

                                </ul>
                            </li>

                            <li className='handPoint'>
                              <p style={{marginBottom: '0px'}}><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Bank Of Montreal</p>
                                <ul className='cardList'>

                                  <li className='handPoint'>
                                    <p className='subBullet' style={{marginTop: '4px'}}><span style={{marginRight: '8px'}}>-</span>IT Operations Analyst</p>
                                  </li>

                                </ul>
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
                  <div id='skillsCardHobbies' className="flip-container pointer" ontouchstart="this.classList.toggle('hover');" onClick={() => {
                      this.flipCard('skillsCardHobbies');
                    }}>
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
                              <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Ping Pong <FontAwesomeIcon icon={faTableTennis} size='lg' style={{marginLeft: '4px'}}/></p>
                            </li>

                            <li className='handPoint'>
                              <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Audio Production <FontAwesomeIcon icon={faSoundcloud} size='lg' style={{marginLeft: '4px'}}/></p>
                            </li>

                            <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Guitar <FontAwesomeIcon icon={faMusic} size='lg' style={{marginLeft: '4px'}}/></p>

                            <li className='handPoint'>
                            <p><span style={{marginRight: '8px'}}><FontAwesomeIcon icon={faChevronCircleRight} size='1.5x' style={{color: '#387aff'}}/></span>Hockey <FontAwesomeIcon icon={faHockeyPuck} size='lg' style={{marginLeft: '4px'}}/></p>
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

  }



}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
