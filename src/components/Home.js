import React from 'react';
import styled from 'styled-components';
import AppImg from '../assets/img/phone.png';

const Home = () => {
  return (
    <HomeWrapper>
      <Title>
        <SubText>나만의 알람친구</SubText>
        <TitleText>뚜두즈</TitleText>
        <Button onClick={()=> alert("COMMING SOON!")}>DOWNLOAD</Button>
      </Title>
      <AppSlide>
        <img src={AppImg} style={{height: '100%', width: '100%'}} alt="앱 이미지"/> {/*배경제거버전 요청하기 */}
      </AppSlide>
      </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FD9681;
  height: 100%;
  width: 100%;
  color: black;
`

const AppSlide = styled.div`
  display: flex;
  width: 60vw;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  font-family: 'Jua', sans-serif;
  color: white;
`
const SubText = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
`

const TitleText = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  margin: 0;
`

const Button = styled.button`
  border: 1.5px solid white;
  border-radius: 10px;
  background-color: #11ffee00;  /* 완전 투명 */
  color: white;
  height: 3rem;
  width: 8rem;
`

export default Home;