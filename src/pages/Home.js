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


import '../styles/master.css'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLine: false,
      doneTyping: false,
      lineBreakWidth: '0%',
      topHeight: '15%',
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
            <Block style={{
              transition: 'background 1s',
              background: this.state.navBarBackground ? 'rgba(165, 160, 154, .5)' : '#64706c',
              position: 'fixed',
              top: 0,
              margin: 'auto',
              textAlign: 'center',
              padding: '12px',
              height: '100px',
              boxShadow: this.state.navBarBackground ?  '' : 'inset 0 0 8px black',
              }}
              className='navBar'
              >
              <Block  style={{
                  display: 'table-cell',
                  verticalAlign: 'middle',
                }}>
                <a href='/'
                  className='navBarTitle'
                  style={{
                    fontSize: this.state.navBarBackground ? '22px' : '',
                  }}
                  >
                  C K
                </a>

                <a style={{
                    marginLeft: '80%',
                    fontSize: this.state.navBarBackground ? '20px' : '',
                  }} href='https://www.linkedin.com/in/connorkent1/' target='_blank' className='navBarIcon'>
                  <FontAwesomeIcon icon={faLinkedin} size='lg' />
                </a>
                <a style={{
                    marginLeft: '18px',
                    fontSize: this.state.navBarBackground ? '22px' : '',
                  }} href='https://github.com/connorkent21' target='_blank' className='navBarIcon'>
                  <FontAwesomeIcon icon={faGithubSquare} size='lg' />
                </a>
              </Block>
            </Block>

          <Block style={{
              width: '80%',
              margin: 'auto',
              textAlign: 'center',
              marginTop: this.state.topHeight,
              height: 'auto',
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
                display: this.state.topHeight == '15%' ? 'block' : 'none'
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
            Projects
          </Block>

          <Block className='projectCard'>
            <Block style={{
                margin:'auto',
                textAlign: 'center',
                marginTop: '25%',
                
              }}>

            </Block>

          </Block>
        </section>


        <section className='containerGrid' style={{
              padding: '20px',
              paddingBottom: '100px',
            }} >
            <div className='gridHeader' style={{
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <h1 color='black' style={{
                  margin: 'auto',
                  textAlign: 'center',
                  marginBottom: '50px',
                }}>
                  About Me
              </h1>
            </div>



              <Flex className='gridItemHead' style={{
                  display: 'inline-block',
                  width: '100%',
                  fontSize: '28px',
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: '0px',
                }}>
                  <Block style={{
                      height: '25%',
                    }}>
                    WHY LEND?
                  </Block>
                  <Copy color='black' medium={{
                      'font-size' : '1.25rem'
                    }} style={{
                      color: 'black',
                      marginTop: '16px',
                      textAlign: 'center',
                      margin: 'auto',
                      fontWeight: 500,
                      width: '80%'
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. A lacus vestibulum sed arcu non odio euismod. In vitae
                    turpis massa sed elementum tempus egestas sed sed. Aliquet
                    porttitor lacus luctus accumsan tortor posuere ac ut.
                  </Copy>
              </Flex>



              <Flex className='gridItemHead' style={{
                  display: 'inline-block',
                  width: '100%',
                  fontSize: '28px',
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: '0px',
                }}>
                  <Block style={{
                      height: '25%',
                    }}>
                    YOU'RE IN CONTROL
                  </Block>
                  <Copy color='black' medium={{
                      'font-size' : '1.25rem'
                    }} style={{
                      color: 'black',
                      marginTop: '16px',
                      textAlign: 'center',
                      margin: 'auto',
                      fontWeight: 500,
                      width: '80%'
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. A lacus vestibulum sed arcu non odio euismod. In vitae
                    turpis massa sed elementum tempus egestas sed sed. Aliquet
                    porttitor lacus luctus accumsan tortor posuere ac ut.
                  </Copy>
              </Flex>


              <Flex className='gridItemHead' style={{
                  display: 'inline-block',
                  width: '100%',
                  fontSize: '28px',
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: '0px',
                }}>
                  <Block style={{
                      height: '25%',
                    }}>
                    WE'RE THERE
                  </Block>
                  <Copy color='black' medium={{
                      'font-size' : '1.25rem'
                    }} style={{
                      color: 'black',
                      marginTop: '16px',
                      textAlign: 'center',
                      margin: 'auto',
                      fontWeight: 500,
                      width: '80%'
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. A lacus vestibulum sed arcu non odio euismod. In vitae
                    turpis massa sed elementum tempus egestas sed sed. Aliquet
                    porttitor lacus luctus accumsan tortor posuere ac ut.
                  </Copy>
              </Flex>
          </section>


      </Block>

    );
  }

}
// hello this is Danlin, Dalin love you. ok bye <3
export default Home;
