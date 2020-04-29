import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #333;
    text-align: left;
    padding: 12px;
    font-size: 12px;
    text-transform: uppercase;
  }

  tbody {
    td:first-child {
      width: 120px;
      height: 150px;
      min-width: 120px;
      min-height: 150px;

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    td {
      padding: 12px;

      a {
        color: #000;
      }
    }
  }

  span {
    display: block;
  }

  button {
    background: transparent;
    border: 0;
  }
`
