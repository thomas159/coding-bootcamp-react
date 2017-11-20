import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container, { media } from '../../atoms/Container'
import { compareData } from '../../data'
import Img from '../../atoms/Img'
import * as palette from '../../atoms/variables'


const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled(Link)`
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

const Title = styled.div`
  padding: 20px 20px 40px 20px;
  background: #fff;
  text-align: center;
`

const Compare = () => (
  <Container padding40>
    <Grid>
      {compareData.map(item =>
        <Cell to={`compare/${item.slug}`}>
          <Img src={item.img} />
          <Title>Compare {item.cat} &rarr;</Title>
        </Cell>,
      )}
    </Grid>
  </Container>
)

export default Compare
