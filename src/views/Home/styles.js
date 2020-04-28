import styled from 'styled-components'

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  transition: grid-template-columns 1s;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;

    div.image_container {
      height: 270px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &:hover button {
        transform: translateY(-100px);
      }
      &:hover a.search_icon {
        transform: translateY(-100px);
      }

      img {
        object-fit: cover;
        align-self: center;
        width: 100%;
        min-height: 100%;
      }

      div.buttons {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        bottom: -55px;

        * {
          color: #fff;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: #333;
          border-radius: 25px;
          border: 0;
          margin: 0 10px;
          transition: transform 0.7s;

          svg {
            font-size: 14px;
            /* margin-right: 10px; */
          }
        }
      }

      a.search_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #333;
        border-radius: 25px;
        margin: 0 10px;
        transition: transform 1s;
      }
    }

    div.product_details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 75px;
      padding: 18px;

      a {
        text-decoration: none;
      }
    }
  }
`
