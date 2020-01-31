import React from 'react';
import styled from '@emotion/styled';

const StyledLanding = styled.div`
  .outer-landing-wrapper {
    width: 100%;
    height: 100vh;
    background-color: #1c202b;
    display: table;
  }
  .inner-landing-wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 0 0 0 50px;
    @media (max-width: 900px) {
      padding: 0 0 0 3%;
    }
  }
  .landing-title {
    font-family: 'Montserrat', sans-serif;
    color: #fb544d;
    font-weight: 900;
    margin: 0;
    padding: 0;
    font-size: 140px;
    line-height: 1.1;
    mix-blend-mode: screen;
    white-space: nowrap;
    @media (max-width: 900px) {
      font-size: 16.5vw;
    }
  }
  .landing-description {
    font-family: 'Montserrat', sans-serif;
    color: #fb544d;
    font-weight: 300;
    margin: 0 3% 0 0;
    padding: 30px 0 0 0;
    font-size: 30px;
    line-height: 1.1;
    mix-blend-mode: screen;
    @media (max-width: 900px) {
      padding: 20px 0 0 0;
    }
  }
`;

const Landing = (props) => {
  return (
    <StyledLanding>
      <div style={{ backgroundColor: props.bgColor }} className='outer-landing-wrapper'>
        <div className='inner-landing-wrapper'>
          <h1 className='landing-title'>Hey,</h1>
          <h1 className='landing-title'>I'm Teemu</h1>
          <h2 className='landing-description'>a Finnish programmer journalist</h2>
        </div>
      </div>
    </StyledLanding>);
};

export default Landing;