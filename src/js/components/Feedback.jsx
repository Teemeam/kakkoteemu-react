import React from 'react';
import styled from '@emotion/styled';

const StyledFeedback = styled.div`
    width: 100%;
    height: 50vh;
    background-color: rgb(0, 30, 30); /* Fallback */
`;

const Feedback = (props) => {

  return (
    <StyledFeedback style={{ background: 'linear-gradient(rgb(0, 30, 30), ' + props.bgColor + ')' }}>

    </StyledFeedback>);
};

export default Feedback;