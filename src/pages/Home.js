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
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-particles-js';
import PdfModal from '../components/PdfModal';
import NavBar from '../components/navBar';
import Carousel from 'nuka-carousel';
import About from '../components/About';
import ParticlesTop from '../components/ParticlesTop';
import ParticlesAbout from '../components/ParticlesAbout';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';


import '../styles/master.css'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLine: false,
      doneTyping: false,
      lineBreakWidth: 0,
      topHeight: '0%',
      atTop: true,
      showPDF: false,
      showContact: false,
    };
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > 10) {
      this.setState({atTop: false})
    } else if (scrollHeight < 10 && !this.state.atTop) {
      this.setState({atTop: true});
    }

  }

  componentDidUpdate() {}


  // onMouseEnter={this.toggleHover}
  // onMouseOut={this.toggleHover}
  render() {
    return (
      <Block>
        <Block className='container'>
          <NavBar onTop={this.state.atTop}/>
          <Block style={{position: 'absolute'}}>
            <ParticlesTop />
          </Block>
          <PdfModal
            showModal={this.state.showPDF}
            exitModal={() => {
              this.setState({showPDF: false});
            }}
          />
          <ContactModal
              showModal={this.state.showContact}
              exitModal={() => {
                this.setState({showContact: false});
              }}
              display={this.state.showContact}
            />
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

              <Zoom duration={2500} onReveal={() => {
                  this.setState({doneTyping: true})
                }}>
                <span className='typedTitle' style={{margin: 'auto', textAlign: 'center'}}>
                  CONNOR KENT
                </span>
              </Zoom>
              <Block className={this.state.lineBreakWidth ? 'lineBreak length' : 'lineBreak noLength'}></Block>


            <Block style={{
                margin: 'auto',
                display: this.state.topHeight == '0%' ? 'block' : 'none',
                paddingTop: '50px',
              }}>
              <Fade bottom big  when={this.state.doneTyping}>
                <Block className='typedMenu' onClick={() => {
                    const projects = document.getElementsByClassName('projectsGrid')[0];
                    projects.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    });
                  }}>
                  Projects
                </Block>
              </Fade>
              <Fade bottom big when={this.state.doneTyping} delay={500}>
                <Block className='typedMenu' onClick={() => {
                    this.setState({showPDF: true});
                  }}>
                  Resume
                </Block>
              </Fade>

              <Fade bottom big when={this.state.doneTyping} delay={1000}>
                <Block className='typedMenu' onClick={() => {
                    const about = document.getElementById('aboutSectionStart');
                    about.scrollIntoView({
                      block: 'start',
                      behavior: 'smooth',
                    });
                  }}>
                  About Me
                </Block>
              </Fade>

              <Fade bottom big when={this.state.doneTyping} delay={1500} onReveal={() => {
                  this.setState({lineBreakWidth: '30%'});
                }}>
                <Block className='typedMenu' onClick={() => {
                    this.setState({showContact: true});
                  }}>
                  Contact
                </Block>
              </Fade>
            </Block>

            <Block style={{
                margin: 'auto',
                marginTop: '20px',
                width: '75px',
                height: '120px',
                alignItems: 'center',
                textAlign: 'center',
                color: '#f6f1ed',
              }} className='pointer' onClick={() => {
                  const projects = document.getElementsByClassName('projectsGrid')[0];
                  projects.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                  });
                }}>
              <Fade big delay={2500}>
                <FontAwesomeIcon icon={faChevronDown} size='lg' className='scrollArrow'/>
              </Fade>
            </Block>


          </Block>


        </Block>


        <section className='projectsGrid'>
          <Block className='projectsHeader'>
            PROJECTS
          </Block>
          <Block className='span-12' id='lineBreakProjects' style={{
              height: '12px',
              width: '100%',
              backgroundColor: 'black',
            }}>

          </Block>
          <Block className='span-12' id='projectsShadow' style={{
              height: '12px',
              width: '100%',
              backgroundColor: 'white',
              boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)',
            }}>

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





          <Block className='projectCard' style={{
            }}>
            <Block className='projectsGrid'>

                <Block className='projectsHeader underline' style={{
                    fontSize: '36px',
                  }}>
                    <Fade>
                      <Block>
                        DOZR Web/DOZR Native
                        <Block style={{
                            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
                            height: '1px',
                            width: '75%',
                            margin: 'auto',
                            gridColumn: 'span 12',
                          }}></Block>
                      </Block>
                    </Fade>



              </Block>


                <Block className='projectCard copy' style={{
                    width: '80%',
                    margin: 'auto',
                    boxSizing: 'border-box',
                    display: 'table'
                  }}>
                  <Fade left className='span-6'>
                    <span style={{
                        display: 'table-cell',
                        verticalAlign: 'middle',
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      volutpat, nibh eu egestas fermentum, lectus mauris feugiat est,
                      sodales semper nisi risus non ipsum. Nullam eget dolor sit amet
                      arcu ullamcorper gravida ut a ex. Vivamus eu tincidunt massa,
                      in luctus erat. Sed ut elit eu nisl varius varius. Ut vitae
                      finibus purus. In justo justo, scelerisque nec odio eget,
                      hendrerit semper turpis. Pellentesque habitant morbi tristique.
                    </span>
                  </Fade>
                </Block>


                <Block className='projectCard' style={{
                  boxSizing: 'border-box',
                  width: '80%',
                  margin: 'auto',
                  padding: '0 0 20% 0',
                  }}>
                    <Block className='span-12 project' style={{
                        height: '50%',
                        width: '100%',
                        margin: 'auto',
                        marginBottom: '12px',
                        marginTop: '10%',
                        background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1544979515/earnings.jpg") no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        backgroundColor: '#191919',
                        boxShadow: '5px 8px 32px -4px rgba(0,0,0,0.67)',

                      }}
                    >
                    <Block className='projectOverlay' onClick={() => window.open('https://dozr.com/supplier')}>
                      <Block className='overlayText' style={{
                          verticalAlign: 'middle',
                        }}>
                        <span className='overlayLinkDozr' onClick={() => window.open('https://dozr.com/supplier')}>
                          Check it out! <FontAwesomeIcon icon={faChevronRight} size='lg' style={{
                            paddingLeft: '8px',
                          }}/>
                        </span>
                      </Block>
                    </Block>
                    </Block>

                    <Block className='span-12 project' style={{
                      height: '50%',
                      width: '100%',
                      margin: 'auto',
                      marginBottom: '12px',
                      background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1544979513/login.jpg") no-repeat',
                      backgroundSize: '100% auto',
                      backgroundPosition: 'center',
                      backgroundColor: '#191919',
                      boxShadow: '5px 8px 32px -4px rgba(0,0,0,0.67)',

                    }}
                    >
                    <Block className='projectOverlay' onClick={() => window.open('https://dozr.com/login')}>
                      <Block className='overlayText' style={{
                          verticalAlign: 'middle',
                        }}>
                        <span className='overlayLinkDozr'>
                          Check it out! <FontAwesomeIcon icon={faChevronRight} size='lg' style={{
                            paddingLeft: '8px',
                          }}/>
                        </span>

                      </Block>
                    </Block>

                    </Block>



                </Block>



            </Block>
          </Block>



          <Block className='projectCard' style={{
            }}>
            <Block className='projectsGrid'>

                <Block className='projectsHeader underline' style={{
                    fontSize: '36px',
                  }}>
                    <Fade>
                      <Block>
                        DOZR Pong
                        <Block style={{
                            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
                            height: '1px',
                            width: '75%',
                            margin: 'auto',
                            gridColumn: 'span 12',
                          }}></Block>
                      </Block>
                    </Fade>



              </Block>


                <Block className='projectCard copy' style={{
                    width: '80%',
                    margin: 'auto',
                    boxSizing: 'border-box',
                    display: 'table'
                  }}>
                  <Fade left className='span-6'>
                    <span style={{
                        display: 'table-cell',
                        verticalAlign: 'middle',
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      volutpat, nibh eu egestas fermentum, lectus mauris feugiat est,
                      sodales semper nisi risus non ipsum. Nullam eget dolor sit amet
                      arcu ullamcorper gravida ut a ex. Vivamus eu tincidunt massa,
                      in luctus erat. Sed ut elit eu nisl varius varius. Ut vitae
                      finibus purus. In justo justo, scelerisque nec odio eget,
                      hendrerit semper turpis. Pellentesque habitant morbi tristique.
                    </span>
                  </Fade>
                </Block>


                <Block className='projectCard' style={{
                  boxSizing: 'border-box',
                  width: '80%',
                  margin: 'auto',
                  padding: '0 0 20% 0',
                  }}>
                    <Block className='span-12 project' style={{
                        height: '50%',
                        width: '100%',
                        margin: 'auto',
                        marginBottom: '12px',
                        marginTop: '10%',
                        background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1544980442/dozrPongSS.jpg") no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        backgroundColor: '#191919',
                        boxShadow: '5px 8px 32px -4px rgba(0,0,0,0.67)',

                      }}
                    >
                    <Block className='projectOverlay overlayLinkDozr' onClick={() => window.open('https://pong.dozr.com/')}>
                      <Block className='overlayText' style={{
                          verticalAlign: 'middle',
                        }}>
                        <span className='overlayLinkDozr'>
                          Check it out! <FontAwesomeIcon icon={faChevronRight} size='lg' style={{
                            paddingLeft: '8px',
                          }}/>
                        </span>
                      </Block>
                    </Block>
                    </Block>

                    <Block className='span-12 project' style={{
                      height: '50%',
                      width: '100%',
                      margin: 'auto',
                      marginBottom: '12px',
                      background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1544980437/dozrPongSS2.jpg") no-repeat',
                      backgroundSize: '100% auto',
                      backgroundPosition: 'center',
                      backgroundColor: '#191919',
                      boxShadow: '5px 8px 32px -4px rgba(0,0,0,0.67)',

                    }}
                    >
                    <Block className='projectOverlay overlayLinkDozr' onClick={() => window.open('https://pong.dozr.com/player/Connor')}>
                      <Block className='overlayText' style={{
                          verticalAlign: 'middle',
                        }}>
                        <span className='overlayLinkDozr'>
                          Check it out! <FontAwesomeIcon icon={faChevronRight} size='lg' style={{
                            paddingLeft: '8px',
                          }}/>
                        </span>

                      </Block>
                    </Block>

                    </Block>



                </Block>



            </Block>
          </Block>








          <Block className='projectCard' style={{
              background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1544979210/dozrpong.jpg") no-repeat',
              backgroundSize: '80% auto',
              backgroundPosition: 'center',
              backgroundColor: 'black',
            }}>
            <Block className='projectOverlay'>
              <Block className='overlayText dozrOverlay'>
                <Block className='toolsUsedHeader'>
                  Built with...
                </Block>
                <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544979209/css.png' style={{
                    maxWidth: '33.3%',
                    maxHeight: '35%',
                    margin: 'auto',
                    display: 'inline',
                    padding: '8px',
                    marginTop: '5%',
                  }} />
                  <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544979209/reactLogo.png' style={{
                      maxWidth: '33.3%',
                      maxHeight: '35%',
                      margin: 'auto',
                      display: 'inline',
                      padding: '8px',
                      marginTop: '5%',
                    }} />
                    <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544980060/materialLogo.webp' style={{
                        maxWidth: '33.3%',
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
            display: 'inline-block',
          }}>
          <Block style={{
              height: 0,
              width: '100%',
            }}>
            <ParticlesAbout />
          </Block>

          <Block style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            id='aboutSectionStart'
          >
            <About />
          </Block>


        </Block>

        <Block style={{
            backgroundColor: '#f6f1ed',
            height: 'auto',
          }}>
          <Footer
            projectsLink={() => {
              const projects = document.getElementsByClassName('projectsGrid')[0];
              projects.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
              });
            }}
            aboutMeLink={() => {
              const about = document.getElementById('aboutSectionStart');
              about.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
              });
            }}
            resumeLink={() => {
              this.setState({showPDF: true});
            }}
            contactLink={() => {
              this.setState({showContact: true});
            }}
          />
        </Block>


      </Block>

    );
  }

}
// hello this is Danlin, Dalin love you. ok bye <3
export default Home;
