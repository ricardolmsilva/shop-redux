import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//
// ─── UTILS ──────────────────────────────────────────────────────────────────────
//
import { formatPrice } from '../../utils/format'

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//
import { Footer } from './styles'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function CartFooter({ total }) {
  return (
    <Footer>
      <button type="button"> Finish purchase </button>

      <div className="total">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
    </Footer>
  )
}

CartFooter.propTypes = {
  total: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  ),
})

export default connect(mapStateToProps)(CartFooter)
