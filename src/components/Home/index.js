import React, { Component } from 'react'
import styled from 'styled-components'
// import { string } from 'prop-types'
import Hero from './Hero'
import Compare from './Compare'
import CompareAlt from './CompareAlt'
import Section from '../atoms/Section'
import Container from '../atoms/Container'

const Wrap = styled.div`
  width: 100%;
`

const TextBlurb = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 40px 0 20px 0;
  color: #fff;
  text-align: center;
  font-size: 30px;
  justify-content: center;
`
const SmallBlurb = styled.div`
display: flex;
width: 100%;
height: auto;
padding: 0 0 40px 0;
color: #fff;
text-align: center;
font-size: 20px;
justify-content: center;
`
export default class Home extends Component {
  // static propTypes = {
  //   match: string,
  // }

  // static defaultProps = {
  //   match: '',
  // }
  render() {
    return (
      <Wrap>
        <Hero />
        <Section bg="#62ADAB">
          <Container>
            <TextBlurb>SOME BLURB ABOUT THE SITE</TextBlurb>
            <SmallBlurb>smaller blurb about the site</SmallBlurb>
          </Container>
        </Section>
        <Section>
          <Compare />
        </Section>
        <CompareAlt />
      </Wrap>
    )
  }
}
