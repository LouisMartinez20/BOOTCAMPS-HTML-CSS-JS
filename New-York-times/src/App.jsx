import { Header } from "./assets/componets/Header/HeaderComponent.jsx";
import { Main } from "./assets/componets/Main/Main.jsx";
import { Footer } from "./assets/componets/Footer/Footer.jsx";
import { GlobalStyles, StyledAppContainer } from "./Styled.js";
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledAppContainer>
        <Header />
        <Main />
        <Footer />
      </StyledAppContainer>
    </>
  );
};
export default App;
