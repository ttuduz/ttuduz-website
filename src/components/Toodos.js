import React from 'react';
import styled from 'styled-components';
import mong from '../assets/img/body-mong.png';
import kking from '../assets/img/body-kking.png';
import peng from '../assets/img/body-peng.png';
import pan from '../assets/img/body-pan.png';
import su from '../assets/img/body-su.png';
import itemmong from '../assets/img/item-mong.png';
import itemkking from '../assets/img/item-kking.png';
import itempeng from '../assets/img/item-peng.png';
import itempan from '../assets/img/item-pan.png';
import itemsu from '../assets/img/item-su.png';

const Toodos = () => {
  return (
    <ToodosWrapper>
      <h1 style={{margin: '5rem'}}>TOODOS</h1>
      <ToodosContainer>
        <Body>
          <img src={mong} alt="Mong" width="400rem"/>
        </Body>
        <Script>
          <Name>Mong-Mong</Name>
          <Description>
            부끄럼이 많아 항상 볼이 분홍색인 강아지. <br/>
            자기가 가장 좋아하는 간식인 뼈다귀를 머리위에 올리고 다닌다. <br/>
            감정을 잘 숨기지 못해 표정에 쉽게 드러나는 편이다. <br/>
            깜짝 놀라면 뼈다귀가 몽몽이 머리에서 떨어진다.<br/>
          </Description>
          <Item>
            ITEM &nbsp;
            <img src={itemmong} alt="Itme" height="30px" width="30px"/>
          </Item>
        </Script>
      </ToodosContainer>
      <ToodosContainer>
        <Script>
          <Name>DARSURY</Name>
          <Description>
            따뜻한 물 위를 둥둥 떠다니는 것을 좋아하는 한국 수달. <br/>
            느긋하게 낮잠자는 것을 사랑한다. <br/>
            더운 여름보단 추운 겨울 따뜻한 물에서 수영하는 것을 즐긴다. <br/>
            날씨 좋은 겨울날엔 물 위에서 햇볕을 쬐는 달수리를 볼 수 있다. <br/>
          </Description>
          <Item>
            ITEM &nbsp;
            <img src={itemsu} alt="Itme" height="30px" width="30px"/>
          </Item>
        </Script>
        <Body>
          <img src={su} alt="Mong" width="400rem"/>
        </Body>
      </ToodosContainer>
      <ToodosContainer>
        <Body>
          <img src={peng} alt="Mong" width="400rem"/>
        </Body>
        <Script>
          <Name>PENG-PENG</Name>
          <Description>
            최강 황제펭귄이 되기 위해 매일 노력하는 펭귄.  <br/>
            황제펭귄 나라의 황제가 되기 위해 매일아침 날개 펀치를 연습한다.  <br/>
            누구보다 강한 체력을 가져 운동장 100바퀴도 거뜬하다.  <br/>
            까만 눈을 들여다보면 열정이란 이름의 불꽃이 타오르고있다. <br/>
          </Description>
          <Item>
            ITEM &nbsp;
            <img src={itempeng} alt="Itme" height="30px" width="30px"/>
          </Item>
        </Script>
      </ToodosContainer>
      <ToodosContainer>
        <Script>
          <Name>PANDASEE</Name>
          <Description>
            먹고 노는게 특기인 한량 판다. <br/> 
            예전에는 한 가닥 하는 무술인이었다는데 알 수없다. <br/>
            얼핏 보면 생각이 많아보이지만 주로 뭐 먹을까 생각 중이다. <br/>
            안경이 본체라는 말도 있다.<br/>
          </Description>
          <Item>
            ITEM &nbsp;
            <img src={itempan} alt="Itme" height="30px" width="30px"/>
          </Item>
        </Script>
        <Body>
          <img src={pan} alt="Mong" width="400rem"/>
        </Body>
      </ToodosContainer>
      <ToodosContainer>
        <Body>
          <img src={kking} alt="Mong" width="400rem"/>
        </Body>
        <Script>
          <Name>KKING</Name>
          <Description>
            여기저기 놀러다니기 좋아하는 토끼. <br/>
            매일 아침 집을 나가 저녁에 들어올만큼 돌아다니는걸 좋아한다.<br/>
            가장 가보고 싶은 곳은 옆집에 사는 판다씨네 집이다. <br/>
            처음 보는 친구와도 금방 친해지며, 요즘 제일 관심있는 건 뜨개질!<br/>
          </Description>
          <Item>
            ITEM &nbsp;
            <img src={itemkking} alt="Itme" height="30px" width="30px"/>
          </Item>
        </Script>
      </ToodosContainer>
    </ToodosWrapper>
  );
};

const ToodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
`

const ToodosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60vh;
  width: 70rem;
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(255, 133, 120, .5);
  margin: 3rem;
  padding: 0;
`
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
`

const Script = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 5rem;
  padding: 1rem 0.5rem;
  width: 20rem;
`

const Name = styled.h1`
  font-size: 1.5rem;
`

const Description = styled.p`
  font-size: 0.8rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
`

export default Toodos;