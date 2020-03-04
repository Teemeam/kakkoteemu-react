import React from 'react';
import styled from '@emotion/styled';

const StyledAbout = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(0, 30, 30); /* Fallback */
  display: table;
  text-align: center;
  div {
    display: table-cell;
    vertical-align: middle;
  }
  div > p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    font-size: 35px;
    line-height: 1.3;
    color: #fc6862;
    @media (max-width: 1400px) {
      max-width: 500px;
      font-size: 30px;
    }
    @media (max-width: 520px) {
      max-width: none;
      width: 94%;
      margin: 0 3%;
    }
    @media (max-width: 360px) {
      font-size: 27px;
    }
  }
  div > p > span {
    font-weight: 900;
    color: #fc6862;
  }
`;

const About = (props) => {
  return (
    <StyledAbout style={{ background: 'linear-gradient(' + props.bgColor + ', rgb(0, 30, 30))' }}>
      <div>
        <p>I've been working as a journalist for the Finnish broadcasting company <span>Yle</span>, tabloid newspaper <span>Iltalehti</span>, local newspaper <span>Salon Seudun Sanomat</span> and <span>Ruotuväki</span>, the newspaper of the Finnish Defence Forces.</p>
      </div>
    </StyledAbout>
  );
};

export default About;