import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input'
import * as palette from '../../atoms/variables'

const Wrap = styled.section`
  width: 100%;
  height: 450px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%), url(https://dl.dropboxusercontent.com/s/s5y1jxz0zf00e24/hero.jpg?dl=0);
  padding: 60px;
`

const FormWrap = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  height: 100%;
  padding: 100px 20px;
  background: rgba(255,255,255,0.7);
  border-radius: ${palette.borderRadius}
`

const Hero = () => (
  <Wrap>
    <FormWrap>
      Search for delivery companies
      <Input
        label="To"
        placeholder="start from"
      />
      <Input
        label="From"
        placeholder="destination"
      />
    </FormWrap>
  </Wrap>
)

export default Hero
