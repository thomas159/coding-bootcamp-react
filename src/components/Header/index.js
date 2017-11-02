import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  z-index: 9999;
  color: #fff;
`

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0 40px 0;
`
const Header = () => (
  <Wrap>
    <Container>
      PragueCompare
    </Container>
  </Wrap>
)

export default Header
