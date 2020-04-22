import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'

import { Container, ProductTable, Total } from './styles'

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg?ts=1587444973&"
                alt="Shoes"
              />
            </td>
            <td>
              <span>Shoes</span>
            </td>
            <td>
              <span>£ 300</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <span>£ 200</span>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finish purchase </button>

        <Total>
          <span>Total</span>
          <strong>£ 120</strong>
        </Total>
      </footer>
    </Container>
  )
}
