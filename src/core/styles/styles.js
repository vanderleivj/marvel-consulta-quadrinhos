import { createGlobalStyle } from 'styled-components';
import banner from '../../shared/assets/images/bg.jpg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    -webkit-font-smoothing: antialiased;
    margin:0px;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button {
    font:16px;
  }
  
  #root{
    padding: 0px;
    min-height: 100vh;
    background-image:url(${banner});

  }
  
`;