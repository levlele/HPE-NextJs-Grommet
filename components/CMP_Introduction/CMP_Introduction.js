import React from "react";
import { Box, Heading, Paragraph } from 'grommet';
import ArrowLink from '../../atoms/CMP_Arrow_Link/CMP_Arrow_Link';
import styled from 'styled-components';
import ContainerBox from '../../atoms/CMP_Container_Box/CMP_Container_Box';

const StyledWrapperBox = styled(Box)`

  & * {
    background-color: inherit;
  }
`;

const StyledBox = styled(Box)`
  padding: 34px 0 40px;

  @media (min-width: 768px) {
    padding: 31px 0 40px;
  }

  @media (min-width: 992px) {
    padding: 31px 0 60px;
  }

  @media (min-width: 1600px) {
    padding: 39px 0 60px;
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  text-transform: uppercase;
  padding-bottom: 20px;
  font-family: 'MetricHPE Black', Arial, sans-serif;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 13px;
  font-size: 28px;
  line-height: 1em;

  &::after {
    background: #01A982;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60px;
    height: 6px;
    margin-left: -30px;

    @media (min-width: 992px) {
      width: 90px;
      margin-left: -45px;
    }
  }

  &.orange::after {
    background: #FF8D6D;
  }

  &.turquoise::after {
    background: #2AD2C9;
  }

  &.purple::after {
    background: #614767;
  }

  &.gray::after {
    background: #C6C9CA;
  }

  @media (min-width: 768px) {
    font-size: 34px;
    padding-top: 31px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }

  @media (min-width: 1600px) {
    font-size: 50px;
    margin-bottom: 23px;
    padding-bottom: 28px;
    padding-top: 29px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-family: 'Metric Light', Arial, sans-serif;
  font-style: normal;
  margin: 0;
  font-size: 18px;
  line-height: 1.22222222em;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.2em;
  }

  @media (min-width: 1600px) {
    font-size: 22px;
    line-height: 1.18181818em;
  }
`;

const Introduction = () => (
  <StyledWrapperBox background="#f6f6f6">
    <ContainerBox background="#f6f6f6">
      <StyledBox align="center" direction="column">
        <Box>
          <StyledHeading
            className="orange"
            level="2"
            size="medium"
            textAlign="center"
            color="#000"
            weight="500"
            fill
          >
            FIND TRAINING AND CERTIFICATION COURSES TO FIT YOUR NEEDS
          </StyledHeading>
        </Box>

        <Box pad="none" basis="auto">
          <StyledParagraph
            alignSelf="center"
            color="dark-1"
            weight="400"
            size="medium"
            fill
          >
            Our training and certification courses are led by HPE experts, giving students the opportunity to interact with industry leaders and the teams responsible for not only developing the technology, but establishing standards as well. Select a subject from the list below to learn more and find your course.
          </StyledParagraph>
        </Box>

        <Box margin={{ top: '24px '}}>
          <ArrowLink
            background="light-2"
            url="#"
            cta="Link"
          />
        </Box>
      </StyledBox>
    </ContainerBox>
  </StyledWrapperBox>
);

export default Introduction;