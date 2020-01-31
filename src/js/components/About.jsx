import React from 'react';
import styled from '@emotion/styled';

const StyledAbout = styled.div`
    width: 100%;
    background-color: #eee;
    padding: 30px 0;
    div {
        max-width: 500px;
        margin: 0 auto;
        background-color: #ddd;
        padding: 20px 0;
        border-radius: 20px;
    }
    div > p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: center;
        max-width: 94%;
        margin: 0 3%;
        font-size: 22px;
        line-height: 1.3;
    }
    div > p > span {
        font-weight: 900;
        color: #fc6862;
    }
`;

const About = (props) => {

  return (
    <StyledAbout>
        <div>
            <p>I've been working as a journalist for the Finnish broadcasting company <span>Yle</span>, tabloid newspaper <span>Iltalehti</span>, local newspaper <span>Salon Seudun Sanomat</span> and <span>Ruotuväki</span>, the newspaper of the Finnish Defence Forces.</p>
        </div>
    </StyledAbout>);
};

export default About;