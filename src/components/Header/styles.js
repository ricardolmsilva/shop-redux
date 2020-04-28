import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 70px;
  position: relative;

  nav {
    display: flex;
    align-items: center;
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px;
  }

  .link_nav {
    border: 1px solid #333;
    padding: 8px 15px;
    text-decoration: none;
    color: #333;
  }

  .link_nav + .link_nav {
    margin-left: 20px;
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: absolute;
  top: 22px;
  right: 0;
  color: #fff;
  background: #f1ae5e;
  padding: 7px 12px;
  border-radius: 10px 0 0 10px;
  font-size: 13px;

  span {
    font-weight: bold;
    padding-left: 10px;
  }
`
