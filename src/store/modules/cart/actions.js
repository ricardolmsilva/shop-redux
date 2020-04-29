export function addToCartRequest(id, quantity = '') {
  return {
    type: '@cart/ADD_REQUEST',
    id,
    quantity,
  }
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  }
}

export function updateProductAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  }
}

export function updateProductAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  }
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  }
}

export function finishPuchase() {
  return {
    type: '@cart/FINISH_PUCHASE',
  }
}
