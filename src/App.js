import React, { Component } from 'react'
import 'sanitize.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/atoms/ScrollToTop'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

const Wrapper = styled.div`
display:flex;
min-height:100vh;
flex:1;
background:#eee;
`

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Wrapper>
          <Footer />
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
