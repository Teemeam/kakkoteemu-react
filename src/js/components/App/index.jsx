import React, { useState, useEffect } from 'react';

/* ------ Components ------ */
import Landing from '../Landing/index.jsx';
import About from '../About/index.jsx';
import Articles from '../Articles/index.jsx';
import Feedback from '../Feedback/index.jsx';
import Footer from '../Footer/index.jsx';

/* ------ Styles ------ */
import * as s from './index.styled';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);
  const [bgColor, setBgColor] = useState('');

  // Update window width
  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  // Update mouse position
  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition(e.pageX);
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Update background color when mouse position changes
  useEffect(() => {
    // Save color values to arrays
    const from = [0, 30, 30]; // Green
    const to = [63, 30, 30]; // Red

    // Declare variables for rgb values
    let r;
    let g;
    let b;

    // On bigger screens, count rgb values based on mouse position. On smaller screens, set background to red
    if (width > 600) {
      // Divide mouse position with window width to get a percentage
      const division = position / width;

      // Count r value
      if (from[0] < to[0]) {
        r = from[0] + (to[0] - from[0]) * division;
      } else if (from[0] > to[0]) {
        r = from[0] - (from[0] - to[0]) * division;
      } else {
        r = from[0];
      }

      // Count g
      if (from[1] < to[1]) {
        g = from[1] + (to[1] - from[1]) * division;
      } else if (from[1] > to[1]) {
        g = from[1] - (from[1] - to[1]) * division;
      } else {
        g = from[1];
      }

      // Count b
      if (from[2] < to[2]) {
        b = from[2] + (to[2] - from[2]) * division;
      } else if (from[2] > to[2]) {
        b = from[2] - (from[2] - to[2]) * division;
      } else {
        b = from[2];
      }
    } else {
      r = to[0];
      g = to[1];
      b = to[2];
    }

    // Put it together
    setBgColor('rgb(' + r + ',' + g + ',' + b + ')');
  }, [position]);

  return (
    <s.Container>
      <Landing bgColor={bgColor} />
      <About bgColor={bgColor} />
      <Articles />
      <Feedback bgColor={bgColor} />
      <Footer bgColor={bgColor} />
    </s.Container>
  );
};

export default App;
