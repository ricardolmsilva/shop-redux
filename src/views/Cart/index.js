import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdKeyboardArrowRight,
} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles'

//
// ─── UTILS AND SERVICES ─────────────────────────────────────────────────────────
//
import { formatPrice } from '../../utils/format'

//
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import * as cartActions from '../../store/modules/cart/actions'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function Cart({ cart, total, removeFromCart, updateProductAmountRequest }) {
  function increaseAmount({ id, amount }) {
    updateProductAmountRequest(id, amount + 1)
  }

  function decreaseAmount({ id, amount }) {
    updateProductAmountRequest(id, amount - 1)
  }
  return (
    <Container>
      {cart.length > 0 ? (
        <div>
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
                    <span>{product.title}</span>
                  </td>
                  <td>
                    <span>{product.price}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => decreaseAmount(product)}
                        />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button">
                        <MdAddCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => increaseAmount(product)}
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <span>{product.subTotal}</span>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete
                        size={20}
                        color="#7159c1"
                        onClick={() => removeFromCart(product.id)}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button"> Finish purchase </button>

            <Total>
              <span>Total</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </div>
      ) : (
        <div className="emptyCart">
          <div>Your cart is empty</div>
          <Link to="/">
            <span>Go to shop</span>
            <MdKeyboardArrowRight />
          </Link>
        </div>
      )}
    </Container>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateProductAmountRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    price: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  })),

  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  ),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
