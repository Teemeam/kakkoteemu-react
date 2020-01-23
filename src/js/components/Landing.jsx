import React, { useEffect, useState, useRef } from 'react';
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
  }
  .landing-title {
    font-family: 'Playfair Display', serif;
    color: #fb544d;
    font-weight: 900;
    margin: 0;
    padding: 0;
    font-size: 160px;
    line-height: 1.1;
  }
`;

const Landing = (props) => {
  // Create hook for mouse position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Init ref hook for landing wrapper
  const landing = useRef();

  // On mouse move, refresh mouse position
  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    landing.current.addEventListener('mousemove', setFromEvent);

    return () => {
      landing.current.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  console.log(window.innerWidth);

  return (
    <StyledLanding>
      <div ref={ landing } style={{ backgroundColor: "rgb(" + (position.x / 20) + ",30,30)" }} className='outer-landing-wrapper'>
          <div className='inner-landing-wrapper'>
              <h1 className='landing-title'>Hey,</h1>
              <h1 className='landing-title'>I'm Teemu</h1>
          </div>
      </div>
    </StyledLanding>);
};

export default Landing;