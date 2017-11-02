import styled from 'styled-components'
import React from 'react'
import { string } from 'prop-types'

const StyledImg = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
`

const Img = ({ src }) => (
  <StyledImg src={`https://dl.dropboxusercontent.com/s/${src}`} />
)

export default Img

Img.propTypes = {
  src: string,
}

Img.defaultProps = {
  src: '',
}
