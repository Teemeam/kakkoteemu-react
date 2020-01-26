import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.div`
    width: 100%;
    padding: 30px 0 0 0;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    div > div {
        max-width: 50%;
        margin: 0 auto;
    }
    div > div > h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        color: #fb544d;
        mix-blend-mode: screen;
    }
    .copyright {
        text-align: center;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 14px;
        padding: 30px 0;
        color: white;
        opacity: 0.1;
    }
`;

const Footer = (props) => {

  return (
    <StyledFooter style={{ backgroundColor: props.bgColor }}>
        <div>
            <div>
                <h3>Location</h3>
            </div>
            <div>
                <h3>Contact</h3>
            </div>
        </div>
        <p className='copyright'>&copy; 2015–2020</p>
    </StyledFooter>);
};

export default Footer;