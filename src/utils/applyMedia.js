import {css} from 'styled-components';

const sizes = {
  large: 1240,
  lmedium: 960,
  medium: 760,
  smedium: 520,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  const minWidth = `(min-width: ${sizes[label] / 16}em)`;

  acc[label] = (...args) => css`
    @media ${minWidth} {
    ${css(...args)}
  }
  `

  return acc
}, {});

const applyMedia = () => {
  return [
    media.smedium`${props => props.smedium}`,
    media.medium`${props => props.medium}`,
    media.lmedium`${props => props.lmedium}`,
    media.large`${props => props.large}`,
  ];
};

export default applyMedia;
