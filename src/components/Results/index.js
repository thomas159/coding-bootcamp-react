import React, { Component } from 'react'
import { array } from 'prop-types'
import styled from 'styled-components'
import ResultCard from './ResultCard'
import Container, { media } from '../atoms/Container'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.li`
  flex: 0 0 100%;
  padding: 10px;
  ${media.desktop`
    flex: 0 0 33.33%;
  `}
  ${media.giant`
    flex: 0 0 33.333%;
  `}
`

export default class ResultsCard extends Component {
  static propTypes = {
    data: array, // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Container >
          <Grid>
            {
              this.props.data.map(items =>
                <Cell>
                  <ResultCard {...items} />
                </Cell>,
              )
            }
          </Grid>
        </Container>
      </div>
    )
  }
}
