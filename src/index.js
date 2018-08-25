import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import registerServiceWorker from './registerServiceWorker'
import './styles'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
