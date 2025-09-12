import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    font-family: Georgia, serif;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  p,
  li {
    font-family: Georgia, serif;
  }

  h1,
  h2,
  h3 {
    font-family: "Cheltenham", "Times New Roman", serif;
    font-weight: bold;
  }
`;

export const StyledAppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;