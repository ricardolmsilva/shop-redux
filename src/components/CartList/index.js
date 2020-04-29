import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiTrash } from 'react-icons/fi'
import { Container, List } from './styles'

//
// ─── UTILS AND SERVICES ─────────────────────────────────────────────────────────
//
import { formatPrice } from '../../utils/format'

//
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import * as cartActions from '../../store/modules/cart/actions'

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//
import QuantityHandler from '../QuantityHandler'
import CartFooter from '../CartFooter'

function CartList({ cart, removeFromCart }) {
  return (
    <Container>
      <List>
        {cart.map((product) => (
          <li key={product.id}>
            <div className="img">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="details">
              <Link to={`/product/${product.id}`}>
                {' '}
                <h1 className="title">{product.title}</h1>
              </Link>

              <div className="price">{product.price}</div>

              <QuantityHandler className="qnt_handler" product={product} />

              <div className="subtotal_delete">
                <div>
                  <span>Subtotal: </span>
                  <span>{product.subTotal}</span>
                </div>

                <button type="button">
                  <FiTrash
                    size={16}
                    color="#333"
                    onClick={() => removeFromCart(product.id)}
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </List>

      <CartFooter />
    </Container>
  )
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    price: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  })),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
