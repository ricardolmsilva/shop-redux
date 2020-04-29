import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import * as cartActions from '../../store/modules/cart/actions'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function CartFooter({ total, finishPuchase }) {
  return (
    <Footer>
      <button type="button" onClick={() => finishPuchase()}>
        Finish purchase
      </button>

      <div className="total">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
    </Footer>
  )
}

CartFooter.propTypes = {
  total: PropTypes.string.isRequired,
  finishPuchase: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  ),
})

const bindDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, bindDispatchToProps)(CartFooter)
