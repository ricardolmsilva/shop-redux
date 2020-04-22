import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import GlobalStyles from './assets/styles/global'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
