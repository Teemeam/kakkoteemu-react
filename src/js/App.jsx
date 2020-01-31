import React from 'react';
import styled from '@emotion/styled';

/* ------ Components ------ */
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Articles from './components/Articles.jsx';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer.jsx';

const AppContainer = styled.div`
  /* */
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      position: 0,
      width: window.innerWidth,
    };

    // Bind
    this.updateMousePosition = this.updateMousePosition.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }
  componentDidMount() {
    // Add event listeners
    window.addEventListener('mousemove', this.updateMousePosition);
    window.addEventListener('resize', this.updateWindowWidth);
  }
  componentWillUnmount() {
    // Remove event listeners
    window.removeEventListener('mousemove', this.updateMousePosition);
    window.removeEventListener('resize', this.updateWindowWidth);
  }
  componentDidUpdate() {
    // Update
  }
  // Update mouse position
  updateMousePosition(e) {
    this.setState({ position: e.pageX });
  }
  // Update window width
  updateWindowWidth() {
    this.setState({ width: window.innerWidth });
  }
  render() {
    // Save color values to arrays
    const from = [0, 30, 30]; // Green
    const to = [63, 30, 30]; // Red

    // Divide mouse position with window width to get a percentage
    const division = this.state.position / this.state.width;

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

    return (
      <AppContainer>
        <Landing bgColor={ bgColor }/>
        <About bgColor={ bgColor }/>
        <Articles />
        <Feedback bgColor={ bgColor }/>
        <Footer bgColor={ bgColor }/>
      </AppContainer>
    );
  }
}

export default App;

App.defaultProps = {
  path: "",
};
