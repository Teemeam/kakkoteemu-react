import React from 'react';

/* ------ Styles ------ */
import * as s from './index.styled';

const Landing = (props) => {
  return (
    <s.Container>
      <div style={{ backgroundColor: props.bgColor }} className='outer-landing-wrapper'>
        <div className='inner-landing-wrapper'>
          <h1 className='landing-title'>Hey,</h1>
          <h1 className='landing-title'>I'm Teemu</h1>
          <h2 className='landing-description'>a Finnish programmer journalist</h2>
        </div>
      </div>
    </s.Container>
  );
};

export default Landing;
