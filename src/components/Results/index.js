import React, { Component } from 'react'
import { array, object } from 'prop-types'
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
    match: object //eslint-disable-line
  }

  static defaultProps = {
    data: '',
    match: '',
  }
  // filter out by category and display resuts for that
  render() {
    const { data } = this.props

    return (
      <div>
        <Container padding40>
          <Grid>
            {
              data.filter(cat => cat.cat === this.props.match.params.catId)
              .map(items =>
                <Cell>
                  <ResultCard filter={this.props.match.params.catId} {...items} />
                </Cell>,
              )
            }
          </Grid>
        </Container>
      </div>
    )
  }
}

