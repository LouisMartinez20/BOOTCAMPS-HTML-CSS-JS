import { HeaderComponent } from "./assets/componets/Header/HeaderComponent.jsx";
import { Main } from "./assets/componets/Main/Main.jsx";
import { Footer } from "./assets/componets/Footer/Footer.jsx";
import { GlobalStyles, AppContainer } from "./Styled.js";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <HeaderComponent />
        <Main />
        <Footer />
      </AppContainer>
    </>
  );
};
export default App;
