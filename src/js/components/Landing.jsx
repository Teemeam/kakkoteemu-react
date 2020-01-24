import React, { useEffect, useState } from 'react';
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
    font-family: 'Montserrat', sans-serif;
    color: #fb544d;
    font-weight: 900;
    margin: 0;
    padding: 0;
    font-size: 140px;
    line-height: 1.1;
    mix-blend-mode: screen;
    white-space: nowrap;
  }
  .landing-description {
    font-family: 'Montserrat', sans-serif;
    color: #fb544d;
    font-weight: 300;
    margin: 0;
    padding: 30px 0 0 0;
    font-size: 30px;
    line-height: 1.1;
    mix-blend-mode: screen;
  }
`;

const Landing = (props) => {

  // Save color values to arrays
  /* const from = [28, 32, 43]; */
  const from = [0, 30, 30]; // Green
  const to = [63, 30, 30]; // Red

  // Create hook for mouse position
  const [position, setPosition] = useState(0);

  // Create hook for window width
  const [width, setWidth] = useState(window.innerWidth);

  // Divide mouse position with window width to get a percentage
  const division = position / width;

  // Declare variables for rgb values
  let r;
  let g;
  let b;

  // Count r value
  if (from[0] < to[0]) {
    r = from[0] + ((to[0] - from[0]) * division);
  } else if (from[0] > to[0]) {
    r = from[0] - ((from[0] - to[0]) * division);
  } else {
    r = from[0];
  }

  // Count g
  if (from[1] < to[1]) {
    g = from[1] + ((to[1] - from[1]) * division);
  } else if (from[1] > to[1]) {
    g = from[1] - ((from[1] - to[1]) * division);
  } else {
    g = from[1];
  }

  // Count b
  if (from[2] < to[2]) {
    b = from[2] + ((to[2] - from[2]) * division);
  } else if (from[2] > to[2]) {
    b = from[2] - ((from[2] - to[2]) * division);
  } else {
    b = from[2];
  }

  // Put it together
  let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';

  // Update mouse position
  const updateMousePosition = e => setPosition(e.pageX);

  // Update window width
  const updateWindowWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    // Add event listeners for mouse move and resize
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      // Remove event listeners
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <StyledLanding>
      <div style={{ backgroundColor: bgColor }} className='outer-landing-wrapper'>
        <div className='inner-landing-wrapper'>
          <h1 className='landing-title'>Hey,</h1>
          <h1 className='landing-title'>I'm Teemu</h1>
          <h2 className='landing-description'>a Finnish programmer journalist</h2>
        </div>
      </div>
    </StyledLanding>);
};

export default Landing;