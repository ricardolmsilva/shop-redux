import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiShoppingCart } from 'react-icons/fi'
import { Container, Cart } from './styles'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function Header({ cartQtd }) {
  return (
    <Container>
      <nav>
        <Link to="/" className="link_nav">
          Home
        </Link>
        <Link to="/project" className="link_nav">
          About Project
        </Link>
      </nav>
      <Cart to="/cart">
        <FiShoppingCart />
        <span>{cartQtd}</span>
      </Cart>
    </Container>
  )
}

Header.propTypes = {
  cartQtd: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  cartQtd: state.cart.reduce((total, product) => {
    return total + product.amount
  }, 0),
})

export default connect(mapStateToProps)(Header)
