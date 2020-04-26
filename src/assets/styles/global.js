import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');

  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing:border-box;
  }

  body{
    background:#191919;
    min-height: 100%;
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font: 14px sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor: pointer;
  }
`
