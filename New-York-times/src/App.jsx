import React from "react";
import HeaderComponent from "./assets/componets/Header/HeaderComponent.jsx";
import Main from "./assets/componets/Main/Main.jsx";
import Footer from "./assets/componets/Footer/Footer.jsx";
import styled from "styled-components";
const AppWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
export const App = () => {
  return (
    <AppWrapper>
      <HeaderComponent />
      <Main />
      <Footer />
    </AppWrapper>
  );
};
export default App;
