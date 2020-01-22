import React from 'react';
import styled from '@emotion/styled';

const StyledLanding = styled.div`
  .outer-landing-wrapper {
    width: 100%;
    height: 100vh;
    background-color: #1c202b;
  }
  h1 {
    margin: 0;
  }
`;

const Landing = (props) => {
  return (
    <StyledLanding>
      <div className='outer-landing-wrapper'>
          <div className='inner-landing-wrapper'>
              {/*<h1>Hei</h1>*/}
          </div>
      </div>
    </StyledLanding>);
};

export default Landing;