import styled from 'styled-components';
import applyMedia from '../utils/applyMedia';


import {
  space,
  width,
  height,
  fontSize,
  fontWeight,
  color,
  flex,
  display,
  justifyContent,
  position,
  borders,
  borderColor,
  textAlign,
  borderRadius,
  top,
  bottom,
  style,
  maxHeight,
  maxWidth,
  minWidth,
  zIndex,
  background,
} from 'styled-system';

import {
  flexGrow,
  flexWrap,
  alignItems,
  boxShadow,
  cursor,
} from '../styles/styled-extensions';

export const Block = styled.div`
  ${space}
  ${width}
  ${height}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${position}
  margin: ${props => props.margin};
  ${maxHeight}
  ${minWidth}
  align-self: ${props =>props.alignSelf};
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${display}
  ${textAlign}
  ${flexGrow}
  ${top}
  ${bottom}
  ${boxShadow}
  ${cursor}
  ${applyMedia()}

  ${maxWidth};

  opacity: ${props => props.opacity};
  ${zIndex};
  background-color: ${props => props.backgroundColor}
  ${background}
`;

export const Section = styled.section`
  ${space}
  ${width}
  ${height}
  ${fontSize}
  ${color}
  ${position}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${display}
  ${textAlign}
  ${flexGrow}
  ${top}
  ${bottom}
  ${boxShadow}
  ${cursor}
  ${applyMedia()}

  ${maxWidth};
  background-color: ${props => props.backgroundColor};
`;

export const Flex = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${justifyContent}
  ${position}
  margin: ${props => props.margin};
  ${flex}
  ${alignItems}
  ${cursor}
  ${borders}
  ${borderColor}
  ${borderRadius}

  display: flex;
  ${display}
  ${flexWrap}
  ${applyMedia()}

  ${maxWidth};
  ${fontSize};
  background-color: ${props => props.backgroundColor};
`;

// TODO use  the functions above
export const Shadow = styled.div`
  text-shadow: ${props => props.textShadow};
  box-shadow: ${props => props.boxShadow};

  ${applyMedia()};
`;

// TODO use  the functions above
export const Copy = styled.p`
  font-family: 'proxima-nova', sans-serif;
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};

  display: ${props => props.display};

  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign || 'inherit'};

  max-width: ${props => props.maxWidth || 'auto'};
  width: ${props => props.width};

  margin: ${props => props.margin};
  padding: ${props => props.padding};

  color: ${props => props.color || 'white'};

  ${applyMedia()}

  background-color: ${props => props.backgroundColor};
`;
