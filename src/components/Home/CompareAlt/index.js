import React from 'react'
import styled from 'styled-components'
import Container, { media } from '../../atoms/Container'
import { compareData } from '../../data'
import Img from '../../atoms/Img'
import * as palette from '../../atoms/variables'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.li`

  font-family: ${palette.title};
  flex: 0 0 100%;
  padding: 10px 10px 40px 10px;
  font-weight: 700;
  font-size: 16px;
  ${media.desktop`
    flex: 0 0 33.33%;
  `}
  ${media.giant`
    flex: 0 0 33.333%;
  `}
`

const Wrap = styled.div`
  position: relative;
`

const Overlay = styled.div`
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  left:0;
  background: linear-gradient(to right,rgba(0,0,0, 0.4),rgba(0,0,0, 0.4))
`

const Text = styled.div`
  font-family: 'Saira', sans-serif;
  display: flex;
  height: 100%;
  font-size: 28px;
  color: #fff;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: 'Saira', sans-serif;
  font-size: 28px;
  padding: 0 10px;
  font-weight: 700;
`

const Compare = () => (
  <Container>
    <Title>Compare</Title>
    <Grid>
      {compareData.map(item =>
        <Cell>
          <Wrap>
            <Img src={item.img} />
            <Overlay>
              <Text> {item.cat}</Text>
            </Overlay>
          </Wrap>
        </Cell>,
      )}
    </Grid>
  </Container>
)

export default Compare
