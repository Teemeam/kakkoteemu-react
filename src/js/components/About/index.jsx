import React from 'react';

/* ------ Styles ------ */
import * as s from './index.styled';

const About = (props) => {
  return (
    <s.Container style={{ background: 'linear-gradient(' + props.bgColor + ', rgb(0, 30, 30))' }}>
      <div>
        <p>
          I've been working as a journalist for the Finnish broadcasting company <span>Yle</span>,
          tabloid newspaper <span>Iltalehti</span>, local newspaper{' '}
          <span>Salon Seudun Sanomat</span> and <span>Ruotuväki</span>, the newspaper of the Finnish
          Defence Forces.
        </p>
      </div>
    </s.Container>
  );
};

export default About;
