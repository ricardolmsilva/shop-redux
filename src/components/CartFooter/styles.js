import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column-reverse;

    button {
      margin-top: 10px;
    }
  }

  button {
    background: #f1ae5e;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.03s;
  }

  div.total {
    display: flex;
    align-items: baseline;

    span {
      color: #333;
      font-weight: bold;
      text-transform: uppercase;
    }

    strong {
      font-size: 28px;
      margin-left: 5px;
    }
  }
`
