import { createGlobalStyle } from 'styled-components';
import wallpaper from 'assets/img/wallpaper.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Ubuntu', sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    position: relative;
    padding: 0;
    background-image: url(${wallpaper});
    background-size: cover;
    background-repeat: no-repeat;
  }

  button:focus {
    outline: 0;
  }

  h1 {
    margin: 0; 
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
