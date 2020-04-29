import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
//
// ─── UTILS AND SERVICES ─────────────────────────────────────────────────────────
//
import api from '../../../services/api'
// import history from '../../../services/history'
import { formatPrice } from '../../../utils/format'

//
// ─── REDUX ACTIONS ──────────────────────────────────────────────────────────────
//
import { addToCartSuccess, updateProductAmountSuccess } from './actions'

//
// ─── MAIN FUNCTION ──────────────────────────────────────────────────────────────
//
function* addToCart({ id, quantity = 1 }) {
  const productExists = yield select((state) =>
    state.cart.find((product) => product.id === id)
  )

  const stock = yield call(api.get, `/stock/${id}`)

  const stockAmount = stock.data.amount
  const currentAmount = productExists ? productExists.amount : 0

  const amount = quantity ? currentAmount + quantity : currentAmount + 1

  if (amount > stockAmount) {
    if (!toast.isActive('out_stock')) {
      toast.warn('No more items available', {
        toastId: 'out_stock',
      })
    }
    return
  }

  if (productExists) {
    yield put(updateProductAmountSuccess(id, amount))
  } else {
    const response = yield call(api.get, `/products/${id}`)
    const data = {
      ...response.data,
      amount,
      priceFormatted: formatPrice(response.data.price),
    }
    yield put(addToCartSuccess(data))
    // history.push('/cart')
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return
  }

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount

  if (amount > stockAmount) {
    if (!toast.isActive('out_stock')) {
      toast.warn('No more items available', {
        toastId: 'out_stock',
      })
    }
    return
  }

  yield put(updateProductAmountSuccess(id, amount))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
])
