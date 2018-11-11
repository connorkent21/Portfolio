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
      topHeight: '15%'
    };

  }

  componentDidMount() {
  }

  componentDidUpdate() {}


  // onMouseEnter={this.toggleHover}
  // onMouseOut={this.toggleHover}
  render() {
    return (
      <Block className='container'>
        <Block style={{
          overflow: 'hidden',
          backgroundColor: 'transparent',
          position: 'fixed',
          top: 0,
          margin: 'auto',
          textAlign: 'center',
          padding: '12px',
          paddingTop: '24px',
          height: '50px',
          }}>
          <a href='/' className='navBarTitle'>
            C K
          </a>

          <a style={{
              marginLeft: '80%',
            }} href='/' className='navBarIcon'>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </a>
          <a style={{
              marginLeft: '18px',
            }} href='/' className='navBarIcon'>
            <FontAwesomeIcon icon={faGithubSquare} size='lg' />
          </a>

        </Block>
        <Block style={{
            width: '80%',
            margin: 'auto',
            textAlign: 'center',
            marginTop: this.state.topHeight,
            height: 'auto',
          }}>

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
    );
  }

}
// hello this is Danlin, Dalin love you. ok bye <3
export default Home;
