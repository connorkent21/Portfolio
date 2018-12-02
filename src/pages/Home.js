import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import { Block, Flex, Copy, Shadow } from '../components/Base';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';


import '../styles/master.css'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLine: false,
      doneTyping: false,
      lineBreakWidth: '0%',
      topHeight: '0%',
      navBarBackground: false,
    };
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > 10) {
      this.setState({navBarBackground: true})
    } else if (scrollHeight < 10 && this.state.navBarBackground) {
      this.setState({navBarBackground: false});
    }

  }

  componentDidUpdate() {}


  // onMouseEnter={this.toggleHover}
  // onMouseOut={this.toggleHover}
  render() {
    return (
      <Block>

        <Block className='container'>
          <Block style={{position: 'absolute'}}>
            <Particles style={{
                height: '100%',
                width: '100%',
                zIndex: '-1',
                position: 'absolute',
                backgroundAttachment: 'fixed',
              }} params={{
              "particles": {
                "number": {
                  "value": 111,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 0.9469771699587272
                },
                "move": {
                  "enable": true,
                  "speed": 3.206824121731046,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 194.89853095232286,
                    "size": 8.120772123013452,
                    "duration": 3.979178340276591,
                    "opacity": 0.20301930307533628,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 600.9371371029954,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }} />

          </Block>

          <Block style={{
              width: '80%',
              margin: 'auto',
              textAlign: 'center',
              marginTop: this.state.topHeight,
              height: 'auto',
              zIndex: '1',
              paddingTop: '15%',
            }}
            >

              <Zoom duration={3000} onReveal={() => {
                  this.setState({doneTyping: true})
                }}>
                <span className='typedTitle' style={{margin: 'auto', textAlign: 'center'}}>
                  CONNOR KENT
                </span>
              </Zoom>
              <Block className='lineBreak' style={{width: this.state.lineBreakWidth}}></Block>


            <Block style={{
                margin: 'auto',
                display: this.state.topHeight == '0%' ? 'block' : 'none',
                paddingTop: '50px',
              }}>
              <Fade bottom big  when={this.state.doneTyping}>
                <Block className='typedMenu'>
                  About Me
                </Block>
              </Fade>
              <Fade bottom big when={this.state.doneTyping} delay={500}>
                <Block className='typedMenu'>
                  Resume
                </Block>
              </Fade>

              <Fade bottom big when={this.state.doneTyping} delay={1000}>
                <Block className='typedMenu'>
                  Projects
                </Block>
              </Fade>

              <Fade bottom big when={this.state.doneTyping} delay={1500} onReveal={() => {
                  this.setState({lineBreakWidth: '50%'});
                }}>
                <Block className='typedMenu'>
                  Contact
                </Block>
              </Fade>
            </Block>

            <Block style={{
                margin: 'auto',
                marginTop: '75px',
                width: '50px',
                height: '75px',
                alignItems: 'center',
                textAlign: 'center',
                color: '#f6f1ed',
              }}>
              <Fade big delay={2500}>
                <FontAwesomeIcon icon={faChevronDown} size='lg' className='scrollArrow' />
              </Fade>
            </Block>


          </Block>


        </Block>


        <section className='projectsGrid'>
          <Block className='projectsHeader'>
            PROJECTS
          </Block>
          <Block className='banner' />

          <Block className='projectCard' style={{
              background: 'url("https://i.imgur.com/GsXG51J.png") no-repeat',
              backgroundSize: '80% auto',
              backgroundPosition: 'center',
              backgroundColor: '#191919',

            }}>
            <Block className='projectOverlay'>
              <Block className='overlayText dozrOverlay'>
                <Block className='toolsUsedHeader'>
                  Built with...
                </Block>
                <img src='https://i.imgur.com/qLgizjN.png' style={{
                    maxWidth: '50%',
                    maxHeight: '35%',
                    margin: 'auto',
                    display: 'inline',
                    padding: '8px',
                    marginTop: '5%',
                  }} />
                  <img src='https://i.imgur.com/9bRalzr.png' style={{
                      maxWidth: '50%',
                      maxHeight: '35%',
                      margin: 'auto',
                      display: 'inline',
                      padding: '8px',
                      marginTop: '5%',
                    }} />
              </Block>
            </Block>
          </Block>

          <Block className='projectCard' style={{
            }}>
            <Block className='projectsGrid'>

                <Block className='projectsHeader underline' style={{
                    fontSize: '36px',
                  }}>
                    <Fade top>
                      DOZR Web/DOZR
                    </Fade>

              </Block>


                <Block className='projectCard copy' style={{
                    width: '80%',
                    margin: 'auto',
                    boxSizing: 'border-box',
                  }}>
                  <Fade left className='span-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    volutpat, nibh eu egestas fermentum, lectus mauris feugiat est,
                    sodales semper nisi risus non ipsum. Nullam eget dolor sit amet
                    arcu ullamcorper gravida ut a ex. Vivamus eu tincidunt massa,
                    in luctus erat. Sed ut elit eu nisl varius varius. Ut vitae
                    finibus purus. In justo justo, scelerisque nec odio eget,
                    hendrerit semper turpis. Pellentesque habitant morbi tristique.
                  </Fade>
                </Block>


                <Block className='projectCard' style={{
                  boxSizing: 'border-box',
                  width: '80%',
                  margin: 'auto',
                  padding: '0 0 20% 0',
                  }}>
                    <Block className='span-12' style={{
                        height: '50%',
                        width: '80%',
                        margin: 'auto',
                        marginBottom: '12px',
                        backgroundColor: 'green',
                      }}
                    >
                    </Block>
                    <Block className='span-12' style={{
                      height: '50%',
                      width: '80%',
                      margin: 'auto',
                      marginBottom: '12px',
                      backgroundColor: 'blue',
                    }}
                    >
                    </Block>


                </Block>



            </Block>
          </Block>
          <Block className='projectCard' style={{
            }}>
            Made a Dozzzzzz
          </Block>
          <Block className='projectCard' style={{
              background: 'url("https://i.imgur.com/GsXG51J.png") no-repeat',
              backgroundSize: '80% auto',
              backgroundPosition: 'center',
              backgroundColor: '#191919',

            }}>
            <Block className='projectOverlay'>
              <Block className='overlayText dozrOverlay'>
                <Block className='toolsUsedHeader'>
                  Built with...
                </Block>
                <img src='https://i.imgur.com/qLgizjN.png' style={{
                    maxWidth: '50%',
                    maxHeight: '35%',
                    margin: 'auto',
                    display: 'inline',
                    padding: '8px',
                    marginTop: '5%',
                  }} />
                  <img src='https://i.imgur.com/9bRalzr.png' style={{
                      maxWidth: '50%',
                      maxHeight: '35%',
                      margin: 'auto',
                      display: 'inline',
                      padding: '8px',
                      marginTop: '5%',
                    }} />
              </Block>
            </Block>
          </Block>
        </section>
        <Block style={{
            height: '500px',
            width: '100%',
            backgroundColor: 'transparent',
          }}>

        </Block>
      </Block>

    );
  }

}
// hello this is Danlin, Dalin love you. ok bye <3
export default Home;
