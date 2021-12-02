import React from 'react';
import callScreen from '../assets/img/call-screen.png';
import todoScreen from '../assets/img/todo-screen.png';
import selectScreen from '../assets/img/select-screen.png';
import styled from '@emotion/styled';

const HowItWorks = () => {
  return (
    <HowItWorksWrapper>
      <h1 style={{margin: '3rem'}}> How It Works</h1>
      <Tutorial>
        <img src={callScreen} alt="튜토리얼 화면입니다" height="75%"/>
        <img src={todoScreen} alt="튜토리얼 화면입니다" height="75%" style={{margin: '5rem'}}/>
        <img src={selectScreen} alt="튜토리얼 화면입니다" height="75%"/>
      </Tutorial>
    </HowItWorksWrapper>
  );
};

const HowItWorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Tutorial = styled.div`
  display: flex;
  flex: row;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export default HowItWorks;