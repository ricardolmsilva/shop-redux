import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

//
// ─── STYLES AND ICONS ───────────────────────────────────────────────────────────
//
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Container } from './styles'

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
function SingleProduct({ match, addToCartRequest, productAmountInCart }) {
  const [product, setProduct] = useState({})
  const [stock, setStock] = useState()
  const [quantityOfInput, setQuantityOfInput] = useState(1)
  const [stockAvailable, setStockAvailable] = useState(0)

  useEffect(() => {
    const { id } = match.params

    async function fetchProductAndStock() {
      const [productDetails, stockDetails] = await Promise.all([
        api.get(`/products/${id}`),
        api.get(`/stock/${id}`),
      ])

      productDetails.data.price = formatPrice(productDetails.data.price)

      setProduct(productDetails.data)
      setStock(stockDetails.data.amount)
    }

    fetchProductAndStock()
  }, [match.params])

  useEffect(() => {
    setStockAvailable(stock - productAmountInCart)
  }, [stock, productAmountInCart])

  const increaseQuantity = async () => {
    const wishQuantity = quantityOfInput + 1

    if (wishQuantity > stockAvailable) {
      if (!toast.isActive('max_amount_available')) {
        toast.error(`Max amount available is ${stockAvailable}`, {
          toastId: 'max_amount_available',
        })
      }
      return
    }

    setQuantityOfInput(quantityOfInput + 1)
  }

  const decreaseQuantity = () => {
    if (quantityOfInput === 1) {
      return
    }

    setQuantityOfInput(quantityOfInput - 1)
  }

  const addToCart = (id, qnt) => {
    setQuantityOfInput(1)
    addToCartRequest(id, qnt)
  }

  return (
    <Container>
      <div className="product_image">
        <img src={product.image} alt="" />
      </div>

      <div className="product_details">
        <h1 className="product_details_title">{product.title}</h1>
        <div className="product_details_price">{product.price}</div>
        <p className="product_details_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At libero
          consequatur debitis, ratione optio vitae amet expedita delectus quasi
          illo doloremque, quo cum dolor eius sint! Eos sapiente non illum?
        </p>
        <div className="product_details_stock">
          <span>Available:</span>
          <span>{stockAvailable}</span>
        </div>

        {stockAvailable > 0 && (
          <div className="buttons">
            <div className="product_quantity">
              <button type="button">
                <FiMinus size={18} onClick={() => decreaseQuantity(product)} />
              </button>
              <input type="number" readOnly value={quantityOfInput} />
              <button type="button">
                <FiPlus size={18} onClick={() => increaseQuantity(product)} />
              </button>
            </div>

            <button
              type="button"
              className="add_to_card"
              onClick={() => addToCart(product.id, quantityOfInput)}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </Container>
  )
}

SingleProduct.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  productAmountInCart: PropTypes.number.isRequired,
}

const mapStateToProps = (state, { match }) => ({
  productAmountInCart: state.cart.map((p) =>
    p.id === Number(match.params.id) ? p.amount : 0
  ),
})

const bindDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, bindDispatchToProps)(SingleProduct)
