import React from 'react';
import styled from '@emotion/styled';

/* ------ Components ------ */
import Landing from './components/Landing.jsx';
import Articles from './components/Articles.jsx';

const AppContainer = styled.div`
  /* */
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    // Mount
  }
  componentDidUpdate() {
    // Update
  }
  render() {
    return (
      <AppContainer>
        <Landing />
        <Articles />
      </AppContainer>
    );
  }
}

export default App;

App.defaultProps = {
  path: "",
};
