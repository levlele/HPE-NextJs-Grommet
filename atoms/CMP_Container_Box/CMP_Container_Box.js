import React from "react";
import { Box } from 'grommet';

import styled from 'styled-components';

const StyledContainerBox = styled(Box)`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 0 50px;
  }

  @media (min-width: 992px) and (max-width: 1599px) {
    padding: 0 80px;
  }

  @media (min-width: 1600px) {
    max-width: 1800px;
    padding: 0 100px;
  }
`;

const ContainerBox = ({ children, background }) => (
  <StyledContainerBox align="center" background={ background }>
    <Box align="center" margin={{ left: '-15px', right: '-15px' }} width="100%" basis="auto" background={ background }>
      { children }
    </Box>
  </StyledContainerBox>
);

export default ContainerBox;