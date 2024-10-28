import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

:root {
    --color1: ${({ theme }) => theme.iconLogoColorSecond};
    --color2: ${({ theme }) => theme.iconLogoColorFirst};
  }

body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColorPrimary};
  margin: 0;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.textColorPrimary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p,
 ul,
 ol {
   margin: 0;
   padding: 0;
 }

 ul {
   list-style: none;
 }

 img {
   display: block;
   max-width: 100%;
   height: auto;
 }

 a{
  text-decoration:none;
      color: white;
 }

 input,
 button,
 textarea,
 select {
  font: inherit;
}
button {
  cursor: pointer;
}
 .reset-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;
