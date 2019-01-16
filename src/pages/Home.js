import React, {Component} from 'react';
import { Block } from '../components/Base';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PdfModal from '../components/PdfModal';
import NavBar from '../components/navBar';
import About from '../components/About';
import ParticlesTop from '../components/ParticlesTop';
import ParticlesAbout from '../components/ParticlesAbout';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import resume from '../components/resume.pdf';


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
          <NavBar onTop={this.state.atTop} page={this}/>
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
              display: 'inline-flex',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '25%',
            }}>
            <Block style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                margin: 'auto',
                textAlign: 'center',
                marginTop: this.state.topHeight,
                height: 'auto',
                zIndex: '1',
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
                  display: this.state.topHeight === '0%' ? 'block' : 'none',
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
                      console.log('trying to open the pdf');
                      window.open(resume, '_blank');
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



        </Block>


        <section className='projectsGrid'>
          <Block className='projectsHeader'>
            PROJECTS
          </Block>
          <Block className='span-12' id='lineBreakProjects' style={{
              height: '8px',
              width: '100%',
              backgroundColor: 'black',
            }}>

          </Block>
          <Block className='span-12' id='projectsShadow' style={{
              height: '12px',
              width: '100%',
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
                  }} alt=''/>
                  <img src='https://i.imgur.com/9bRalzr.png' style={{
                      maxWidth: '50%',
                      maxHeight: '35%',
                      margin: 'auto',
                      display: 'inline',
                      padding: '8px',
                      marginTop: '5%',
                    }} alt=''/>
              </Block>
            </Block>
          </Block>





          <Block className='projectCard' style={{
            }}>
            <Block className='projectsGrid specialContainer'>

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
                    <span className='projectText' style={{
                        display: 'table-cell',
                        verticalAlign: 'middle',
                        textAlign: 'left',
                      }}>
                      Dozr taps into a $92B industry by providing construction
                      equipment rentals to its customers.
                      In addition to this, it creates a market in which contractors,
                      rental houses and micro-entrepreneurs can list unused equipment to generate revenue. <br/>

                      The entirety of the supplier onboarding process for the web
                      product was built by me primarily with <span className='special'>React</span>. Additionally,
                      I’ve also created <span className='special'>price analysis algorithms</span> and <span className='special'>data-scraping
                      pipelines</span> to provide users with comprehensive data before
                      they list their equipment.
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



          <Block className='projectCard specialContainer' style={{
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
                    <span className='projectText' style={{
                        display: 'table-cell',
                        verticalAlign: 'middle',
                        textAlign: 'left',
                      }}>
                      DOZR Pong is an in-house web application created for the company ping-pong tournaments.
                      DOZR pong is a collaborative project built primarily using <span className='special'> React</span>
                    , Google's <span className='special'> Material-UI</span> and the
                    <span className='special'>Google Sheets API</span>. It can be used to track player rankings,
                      game scores, upcoming games, as well as individual player stats.
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
                  }} alt=''/>
                  <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544979209/reactLogo.png' style={{
                      maxWidth: '33.3%',
                      maxHeight: '35%',
                      margin: 'auto',
                      display: 'inline',
                      padding: '8px',
                      marginTop: '5%',
                    }} alt=''/>
                    <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544980060/materialLogo.webp' style={{
                        maxWidth: '33.3%',
                        maxHeight: '35%',
                        margin: 'auto',
                        display: 'inline',
                        padding: '8px',
                        marginTop: '5%',
                      }} alt=''/>

              </Block>
            </Block>
          </Block>



          <Block className='projectCard' style={{
              background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1547066118/cnTower.png") no-repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'center',
              backgroundColor: '#191919',

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
                  }} alt=''/>
                  <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544979209/reactLogo.png' style={{
                      maxWidth: '33.3%',
                      maxHeight: '35%',
                      margin: 'auto',
                      display: 'inline',
                      padding: '8px',
                      marginTop: '5%',
                    }} alt=''/>
                    <img src='https://res.cloudinary.com/ckportfolio/image/upload/v1544980060/materialLogo.webp' style={{
                        maxWidth: '33.3%',
                        maxHeight: '35%',
                        margin: 'auto',
                        display: 'inline',
                        padding: '8px',
                        marginTop: '5%',
                      }} alt=''/>
              </Block>
            </Block>
          </Block>





          <Block className='projectCard' style={{
            }}>
            <Block className='projectsGrid specialContainer'>

                <Block className='projectsHeader underline' style={{
                    fontSize: '36px',
                  }}>
                    <Fade>
                      <Block>
                        Toronto Waste Lookup
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
                    <span className='projectText' style={{
                        display: 'table-cell',
                        verticalAlign: 'middle',
                        textAlign: 'left',
                      }}>
                      Toronto Waste Lookup is an information system built using <span className='special'>React</span> and
                      <span className='special'>Material-UI</span> to aid users in effectively sorting their garbage.
                      <br />
                      This web application makes use of public data published by the City of Toronto and allows users
                      to search and favorite commonly disposed items. Results are displayed with instructions on how to properly dispose of
                      the chosen item.
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
                        margin: '100 auto',
                        marginBottom: '12px',
                        marginTop: '10%',
                        background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1547066381/waste1.jpg") no-repeat',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        backgroundColor: '#191919',
                        boxShadow: '5px 8px 32px -4px rgba(0,0,0,0.67)',

                      }}
                    >
                    <Block className='projectOverlay' onClick={() => window.open('https://sharp-hopper-eec323.netlify.com/')}>
                      <Block className='overlayText' style={{
                          verticalAlign: 'middle',
                        }}>
                        <span className='overlayLinkWaste'>
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
                      background: 'url("https://res.cloudinary.com/ckportfolio/image/upload/v1547066375/waste.jpg") no-repeat',
                      backgroundSize: '100% auto',
                      backgroundPosition: 'center',
                      backgroundColor: '#191919',
                      boxShadow: '5px 8px 32px -4px rgba(0,0,0,0.67)',

                    }}
                    >
                    <Block className='projectOverlay' onClick={() => window.open('https://sharp-hopper-eec323.netlify.com/')}>
                      <Block className='overlayText' style={{
                          verticalAlign: 'middle',
                        }}>
                        <span className='overlayLinkWaste'>
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












        </section>
        <Block style={{
            display: 'inline',
            maxWidth: '100vw',
          }}>
          <Block style={{
              height: 0,
              width: '100%',
            }}>
            <ParticlesAbout />
          </Block>

          <Block style={{
              display: 'inline',
              height: '100%',
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
              console.log('trying to open the pdf');
              window.open(resume, '_blank');
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
