import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import LOGO from '../assets/img/Logo.png';

const header = () => {
  return (
    <Container>
      <Logo>
        <img src={LOGO} style={{height: '3rem', marginRight: '10px'}}/>
        <span style={{fontWeight: '600', fontSize: '2rem'}}>TOODOS</span>
      </Logo>
      <Menu>
        <Option>
          <Link to="Home" spy={true} smooth={true}>
            Home
          </Link>
        </Option>
        <Option>
          <Link to="HowItWorks" spy={true} smooth={true}>
            How It Works
          </Link>
        </Option>
        <Option>
          <Link to="Toodos" spy={true} smooth={true}>
            Toodos
          </Link>
        </Option>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 0rem;
  border-bottom: 1px solid white;
  background-color: #FF7B72;
  color: white;
  width: 100%;
  height: 3rem;
  position: fixed;
`

const Logo = styled.div`
  display: flex;
  margin-left: 1.5rem;
`
const Menu = styled.ul`
  display: flex;
  margin-right: 1.5rem;
`
const Option = styled.div`
  margin-left: 20px;
`

export default header;