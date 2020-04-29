import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiTrash } from 'react-icons/fi'
import { Container, ProductTable } from './styles'

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

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function CartTable({ cart, removeFromCart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Price</th>
            <th>Qtd</th>
            <th>SubTotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </td>
              <td>
                <span>{product.price}</span>
              </td>
              <td>
                <QuantityHandler product={product} />
              </td>
              <td>
                <span>{product.subTotal}</span>
              </td>
              <td>
                <button type="button">
                  <FiTrash
                    size={16}
                    color="#333"
                    onClick={() => removeFromCart(product.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <CartFooter />
    </Container>
  )
}

CartTable.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)
