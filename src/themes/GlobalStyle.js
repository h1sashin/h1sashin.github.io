import { createGlobalStyle } from 'styled-components';
import wallpaper from 'assets/img/wallpaper.jpg';

export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }

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

  textarea:focus, input:focus, button:focus {
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

export const MobileStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  html, body {
    overflow: hidden;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    background-image: url(${wallpaper});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  textarea:focus, input:focus, button:focus {
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
