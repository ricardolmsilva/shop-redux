import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiArrowRight } from 'react-icons/fi'
import { Container } from './styles'

//
// ─── COMPONENTS ------───────────────────────────────────────────────────────────
//
import CartTable from '../../components/CartTable'
import CartList from '../../components/CartList'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function Cart({ cart }) {
  return (
    <Container>
      {cart > 0 ? (
        <>
          <CartTable />
          <CartList />
        </>
      ) : (
        <div className="emptyCart">
          <div>Your cart is empty</div>
          <Link to="/">
            <span>Go to shop</span>
            <FiArrowRight />
          </Link>
        </div>
      )}
    </Container>
  )
}

Cart.propTypes = {
  cart: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  cart: state.cart.length,
})

export default connect(mapStateToProps)(Cart)
