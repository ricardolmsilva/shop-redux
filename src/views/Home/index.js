import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

//
// ─── UTILS AND SERVICES ─────────────────────────────────────────────────────────
//
import api from '../../services/api'
import { formatPrice } from '../../utils/format'

//
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import * as cartActions from '../../store/modules/cart/actions'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    const response = await api.get('/products')

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="Nike" />
          <strong>{product.title}</strong>
          <span> {product.priceFormatted}</span>

          <button type="button" onClick={() => addToCartRequest(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

Home.propTypes = {
  amount: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {}),
})

const bindDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, bindDispatchToProps)(Home)
