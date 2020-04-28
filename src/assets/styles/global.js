import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing:border-box;
  }

  body{
    background:#F9F9F9;
    min-height: 100%;
    -webkit-font-smoothing: antialised;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body, input, button{
    font: 14px Arial, sans-serif;
  }

  input[type='number'],
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {

    -webkit-appearance: none;
    -moz-appearance: textfield;

  }

  #root{

  }

  button{
    cursor: pointer;
  }
`
