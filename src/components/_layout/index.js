import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import Header from '../Header'

import { Container } from './styles'

function Layout({ children }) {
  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.loading,
})

export default connect(mapStateToProps)(Layout)
