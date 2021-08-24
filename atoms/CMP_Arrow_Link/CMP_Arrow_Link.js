import React from "react";
import { Anchor } from 'grommet';
import styled from 'styled-components';
import { Blank } from 'grommet-icons';

export const MyIcon = props => (
  <Blank {...props}>
    <svg xmlns='http://www.w3.org/2000/svg' fill='#01A982' viewBox='0 0 471.2 471.2'>
      <path d='M456.57 248.48a18.45 18.45 0 0 0 5.43-12.9 17.88 17.88 0 0 0-5.43-12.9L340.08 106.19a18.34 18.34 0 0 0-25.93 25.93l85.26 85.13H27.53a18.33 18.33 0 1 0 0 36.66h371.88l-85.26 85.26a18.34 18.34 0 0 0 25.93 25.93z'/>
    </svg>
  </Blank>
);

const StyledAnchor = styled(Anchor)`
  font-family: 'Metric Semibold', Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2em;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const StyledLinkNext = styled(MyIcon)`
  transition: transform 150ms ease-in-out;
  width: 20px;
  height: 20px;
  position: relative;
  left: 5px;
  vertical-align: text-bottom;

  ${StyledAnchor}:hover & {
    transform: translateX(5px);
  }
`;

const ArrowLink = (props) => (
  <StyledAnchor color="brand" href={props.url}>
    {props.cta} <StyledLinkNext color='brand' />
  </StyledAnchor>
);

export default ArrowLink;