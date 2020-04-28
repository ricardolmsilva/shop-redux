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
import Layout from './components/_layout/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={2000} position="bottom-right" />
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
