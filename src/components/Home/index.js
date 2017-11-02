import React, { Component } from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import { gymData } from '../data'
import Results from '../Results'
import Compare from './Compare'

const Wrap = styled.div`
  width: 100%;
`

export default class Home extends Component {
  render() {
    return (
      <Wrap>
        <Hero />
        <Compare />
        <Results data={gymData} />
      </Wrap>
    )
  }
}
