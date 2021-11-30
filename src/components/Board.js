import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import HowItWorks from './HowItWorks';
import Toodos from './Toodos';

const Board = () => {
  return (
    <div>
      <Container id="Home">
        <Home />
      </Container>
      <Container id="HowItWorks">
        <HowItWorks />
      </Container>
      <Container id="Toodos">
        <Toodos />
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: calc(100vh - 5rem);
  padding-top: 5rem;
`

export default Board;