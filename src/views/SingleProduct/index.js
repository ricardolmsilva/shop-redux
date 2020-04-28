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
function SingleProduct({ match, addToCartRequest }) {
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const { id } = match.params

    async function fetchProduct() {
      const response = await api.get(`/products/${id}`)
      response.data.price = formatPrice(response.data.price)
      setProduct(response.data)
    }
    fetchProduct()
  }, [match.params])

  const increaseQuantity = async () => {
    const stock = await api.get(`stock/${product.id}`)
    const wishQuantity = quantity + 1
    if (wishQuantity > stock.data.amount) {
      if (!toast.isActive('out_stock')) {
        toast.warn('Out of stock', {
          toastId: 'out_stock',
        })
      }
      return
    }
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return
    }

    setQuantity(quantity - 1)
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

        <div className="buttons">
          <div className="product_quantity">
            <button type="button">
              <FiMinus size={18} onClick={() => decreaseQuantity(product)} />
            </button>
            <input type="number" readOnly value={quantity} />
            <button type="button">
              <FiPlus size={18} onClick={() => increaseQuantity(product)} />
            </button>
          </div>

          <button
            type="button"
            className="add_to_card"
            onClick={() => addToCartRequest(product.id, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Container>
  )
}

SingleProduct.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

const bindDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch)

export default connect(null, bindDispatchToProps)(SingleProduct)
