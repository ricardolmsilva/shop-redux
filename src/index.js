import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './config/reactotonConfig'
import { Provider } from 'react-redux'
import store from './store'

import history from './services/history'
import Routes from './routes'
import GlobalStyles from './assets/styles/global'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={2000} position="bottom-center" />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
