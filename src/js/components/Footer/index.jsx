import React from 'react';

/* ------ Styles ------ */
import * as s from './index.styled';

const Footer = (props) => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <s.Container style={{ backgroundColor: props.bgColor }}>
      <div>
        <div>
          <h3>Location</h3>
          <p>Tampere, Finland</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>kakkoteemu(at)outlook.com</p>
        </div>
        <div>
          <h3>Social media</h3>
          <p>
            <a href='https://twitter.com/kakkoteemu' target='blank'>
              Twitter
            </a>
            ,{' '}
            <a href='https://fi.linkedin.com/in/kakkoteemu' target='blank'>
              LinkedIn
            </a>
            ,{' '}
            <a href='https://github.com/teemeam' target='blank'>
              GitHub
            </a>
          </p>
        </div>
      </div>
      <p className='copyright'>&copy; 2015–{year}</p>
    </s.Container>
  );
};

export default Footer;
