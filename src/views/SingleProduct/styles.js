import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .product_image {
    img {
      height: 550px;
      object-fit: cover;
      width: 100%;
    }
  }

  .product_details {
    display: flex;
    flex-direction: column;

    .product_details_title {
      color: #333;
      margin: 16px 0;
    }

    .product_details_price {
      font-size: 16px;
      margin-bottom: 16px;
    }

    .product_details_description {
      line-height: 20px;
    }

    .product_details_stock {
      margin-top: 26px;
      opacity: 0.7;
      span + span {
        margin-left: 5px;
      }
    }

    .buttons {
      display: flex;
      margin: 40px 0;

      .product_quantity {
        display: flex;
        align-content: center;
        width: fit-content;
        border: 1px solid #333;
        height: 50px;
        padding: 5px;

        input {
          border: 0;
          text-align: center;
          width: 30px;
          background: #f9f9f9;
        }
        button {
          background: none;
          border: 0;
        }
      }

      button.add_to_card {
        align-self: center;
        width: 180px;
        height: 50px;
        color: #fff;
        background: #333;
        border: 1px solid #333;
        transition: background 0.3s;

        &:hover {
          color: #333;
          background: #f9f9f9;
        }
      }

      .product_quantity + .add_to_card {
        margin-left: 10px;
      }
    }
  }
`
