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
  padding: 10px;
  font-size: 18px;
  ${media.desktop`
    flex: 0 0 33.33%;
  `}
  ${media.giant`
    flex: 0 0 33.333%;
  `}
`

const Title = styled.div`
  padding: 20px;
  background: #fff;
`

const Compare = () => (
  <Container>
    <Grid>
      {compareData.map(item =>
        <Cell>
          <Img src={item.img} />
          <Title>Compare {item.cat}</Title>
        </Cell>,
      )}
    </Grid>
  </Container>
)

export default Compare
