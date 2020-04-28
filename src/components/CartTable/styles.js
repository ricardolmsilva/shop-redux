import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 693.99px) {
    display: none;
  }
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
