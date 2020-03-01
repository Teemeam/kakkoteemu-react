import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.div`
  width: 100%;
  padding: 30px 0 0 0;
  @media (max-width: 820px) {
    padding: 20px 0 0 0;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 820px) {
      flex-direction: column;
    }
  }
  div > div {
    display: block;
    margin: 0 auto;
    flex: 1 1 0px;
  }
  div > div > h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    color: #fb544d;
    mix-blend-mode: screen;
    @media (max-width: 820px) {
      padding: 20px 0 10px 0;
    }
  }
  div > div > p, a {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    margin: 0;
    color: #fb544d;
    mix-blend-mode: screen;
  }
  .copyright {
    text-align: center;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 14px;
    padding: 40px 0 20px 0;
    color: #fb544d;
    mix-blend-mode: screen;
    opacity: 0.1;
  }
`;

const Footer = (props) => {
  return (
    <StyledFooter style={{ backgroundColor: props.bgColor }}>
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
          <p><a href='https://twitter.com/kakkoteemu' target='blank'>Twitter</a>, <a href='https://fi.linkedin.com/in/kakkoteemu' target='blank'>LinkedIn</a>, <a href='https://github.com/teemeam' target='blank'>GitHub</a></p>
        </div>
      </div>
      <p className='copyright'>&copy; 2015–2020</p>
    </StyledFooter>
  );
};

export default Footer;