import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li + li {
    padding-top: 15px;
  }

  li {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    border-bottom: 1px solid #333;
    padding-bottom: 15px;

    @media (max-width: 375px) {
      grid-template-columns: 1fr;

      .details {
        min-height: 180px;
      }
    }

    div {
      img {
        max-height: 200px;
        object-fit: cover;
        width: 100%;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;

      a {
        color: #000;
      }
      .title {
        font-size: 16px;
      }
      .price {
        font-size: 14px;
      }

      .subtotal_delete {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          justify-self: flex-end;
          background: none;
          border: 0;
        }
      }
    }
  }

  div {
    span:first-child {
      font-weight: bold;
    }
  }
`
