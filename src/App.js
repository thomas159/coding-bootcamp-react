import React, { Component } from 'react'
import 'sanitize.css'
import styled from 'styled-components'
import { string } from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/atoms/ScrollToTop'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Results from './components/Results'
import { data } from './components/data'


const Wrapper = styled.div`
display:flex;
min-height:100vh;
flex:1;
background:#eee;
`

class App extends Component {
  static propTypes = {
    match: string,
  }

  static defaultProps = {
    match: '',
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/compare/:catId" component={Results} /> */}
              <Route exact path="/compare/:catId" render={props => <Results data={data} {...props} />} />
            </Switch>
          </Wrapper>
          <Footer />
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
