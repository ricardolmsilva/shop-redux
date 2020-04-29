import produce from 'immer'
import { toast } from 'react-toastify'

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action
        draft.push(product)
        toast.success('Product added to Cart')
      })

    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id)
        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
          toast.success('Product removed from Cart')
        }
      })

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id)
        if (productIndex >= 0) {
          draft[productIndex].amount = action.amount
        }
        toast.success('Quantity updated')
      })
    }

    case '@cart/FINISH_PUCHASE': {
      return produce(state, (draft) => {
        draft.length = 0
        toast.success('Thank you for your puchase')
      })
    }

    default:
      return [...state]
  }
}
