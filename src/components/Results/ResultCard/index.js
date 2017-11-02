import React from 'react'
import styled from 'styled-components'
import { number, string } from 'prop-types'
import Img from '../../atoms/Img'
import * as palette from '../../atoms/variables'
import A from '../../atoms/A'

const Wrap = styled.section`
  width: 100%;
  height: auto;
  background: #fff;
`

const Membership = styled.div`
  padding: 10px;
  background: ${palette.darkBlue};
  color: #fff;
  text-align: center;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.div`
  flex: 0 0 33.3333%;
  text-align: center;
  color: #fff;
`

const Months = styled.div`
  padding: 5px;
  background: #1C798C;
`

const Price = styled.div`
  padding: 5px;
  background: #26A5BF;
`

const Site = styled.div`
  padding: 5px;
  background: #29B0CC;
  color: #fff;
  font-weight: 600;
  text-align: center;
`

const ResultCard = ({ img, link, priceOneMonth, priceSixMonths, priceYear }) => (
  <Wrap>
    <Img src={img} />
    <Membership>Membership Fees</Membership>
    <Grid>
      <Cell>
        <Months>1 Month</Months>
        <Price>{`${priceOneMonth} czk`}</Price>
      </Cell>
      <Cell>
        <Months>6 Months</Months>
        <Price>{`${priceSixMonths} czk`}</Price>
      </Cell>
      <Cell>
        <Months>12 Months</Months>
        <Price>{`${priceYear} czk`}</Price>
      </Cell>
    </Grid>
    <Site><A href={link} target="_blank">Visit site &raquo;</A></Site>
  </Wrap>
)

export default ResultCard


ResultCard.defaultProps = {
  img: '',
  link: '',
  priceOneMonth: '',
  priceSixMonths: '',
  priceYear: '',
}

ResultCard.propTypes = {
  img: string,
  link: '',
  priceOneMonth: number,
  priceSixMonths: number,
  priceYear: number,
}
