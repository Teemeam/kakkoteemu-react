import React from 'react';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  div {
    color: blue;
  }
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
        <div>Hei</div>
      </AppContainer>
    );
  }
}

export default App;

App.defaultProps = {
  path: "",
};
