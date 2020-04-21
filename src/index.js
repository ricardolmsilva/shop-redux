import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import GlobalStyles from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
