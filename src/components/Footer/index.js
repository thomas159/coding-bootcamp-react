import React from 'react'
import styled from 'styled-components'
import Container from '../atoms/Container'

const Wrap = styled.section`
  width: 100%;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.div`
  flex: 0 0 100%;
`

const Top = styled.div`
  background: #353535;
  padding: 10px;
  color: #fff;
`

const Bottom = styled.div`
  background: #282828;
`

const Cat = styled.div`
  padding: 10px;
`
const Footer = () => (
  <Wrap>
    <Top>
      <Container>
        ddd
      </Container>
    </Top>

    <Bottom>
      <Grid>
        <Cell>
          <Top>Compare</Top>
          <Bottom>
            <Cat>Moving companies</Cat>
            <Cat>Gyms</Cat>
          </Bottom>
        </Cell>
      </Grid>
      <Cat>Moving companies</Cat>
      <Cat>Gyms</Cat>
    </Bottom>
  </Wrap>
)

export default Footer
