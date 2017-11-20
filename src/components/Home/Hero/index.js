import React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  width: 100%;
  height: 450px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(https://dl.dropboxusercontent.com/s/s5y1jxz0zf00e24/hero.jpg?dl=0);
  padding: 60px;
`

const Text = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const Hero = () => (
  <Wrap>
    <Text>Compare useful things in Prague</Text>
  </Wrap>
)

export default Hero
