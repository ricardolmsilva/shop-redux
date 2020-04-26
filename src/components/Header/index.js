import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { MdStoreMallDirectory, MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './styles'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function Header({ cartQtd }) {
  return (
    <Container>
      <Link to="/">
        <MdStoreMallDirectory color="#fff" size={80} />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Cart</strong>
          <span>{cartQtd} items</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  )
}

Header.propTypes = {
  cartQtd: PropTypes.number.isRequired,
}

export default connect((state) => ({
  cartQtd: state.cart.length,
}))(Header)
