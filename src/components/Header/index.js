import React from 'react'
import { Link } from 'react-router-dom'
import { MdStoreMallDirectory, MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles'

export default function index() {
  return (
    <Container>
      <Link to="/">
        <MdStoreMallDirectory color="#fff" size={80} />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  )
}
