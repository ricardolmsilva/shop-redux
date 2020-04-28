import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Container } from './styles'

//
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import * as cartActions from '../../store/modules/cart/actions'

function QuantityHandler({ product, updateProductAmountRequest }) {
  function increaseAmount({ id, amount }) {
    updateProductAmountRequest(id, amount + 1)
  }

  function decreaseAmount({ id, amount }) {
    updateProductAmountRequest(id, amount - 1)
  }
  return (
    <Container>
      <button type="button">
        <FiMinus size={18} onClick={() => decreaseAmount(product)} />
      </button>
      <input type="number" readOnly value={product.amount} />
      <button type="button">
        <FiPlus size={18} onClick={() => increaseAmount(product)} />
      </button>
    </Container>
  )
}

QuantityHandler.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  updateProductAmountRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(null, mapDispatchToProps)(QuantityHandler)
