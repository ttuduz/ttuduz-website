import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel'

const HowItWorks = () =>{
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            url: "https://cdn.pixabay.com/photo/2021/11/23/09/47/animal-6818310__340.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            url: "https://cdn.pixabay.com/photo/2021/11/23/09/47/animal-6818310__340.jpg"
        }
    ]

    return (
      <ImgSlide>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </ImgSlide>
    )
}

function Item({item})
{
    return (
        <Box>
          <Script>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </Script>
          <ImgBox>
            <img src={item.url} alt="App" style={{width: "100%"}}/>
          </ImgBox>
        </Box>
    )
}

const ImgSlide = styled.div`
  margin: 1rem;
  align-items: center;
  height: 50vh;
  width: 80vw;
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
`
const ImgBox = styled.div`

`

const Script = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 30vw;
`

export default HowItWorks;