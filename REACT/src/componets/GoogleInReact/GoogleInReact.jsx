import React from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
  }
`;

//  Header y navegación
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 0.625em;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  height: 64px;
  padding: 0 24px;

  a {
    font-size: 1rem;
    color: #222;
    text-decoration: none;
    line-height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const MenuIcon = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .dot {
    width: 4px;
    height: 4px;
    background: #5f6368;
    border-radius: 50%;
    margin: 1px;
    display: inline-block;
  }

  &:hover {
    background: #e8eaed;
    border-radius: 4px;
  }
`;

//  Main
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 80px 0 60px 0;
`;

const Logo = styled.div`
  margin-bottom: 30px;

  img {
    width: 272px;
    height: auto;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto 60px auto;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  background: #fff;
  margin-bottom: 20px;
  
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.625em 0;
  background: #fff;
`;

const Icon = styled.label`
  display: inline-block;
  width: 22px;
  height: 22px;
  padding: 4px;
  margin: 10px ;
  cursor: pointer;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
`;

const IconSearch = styled(Icon)`
  background-image: url('data:image/svg+xml;utf8,<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="gray" stroke-width="2" fill="none"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="gray" stroke-width="2" stroke-linecap="round"/></svg>');
  `;

const IconCamera = styled(Icon)`
  background-image: url('data:image/svg+xml;utf8,<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="12" rx="2" stroke="gray" stroke-width="2" fill="none"/><circle cx="12" cy="13" r="3" stroke="gray" stroke-width="2" fill="none"/><rect x="9" y="3" width="6" height="4" rx="1" stroke="gray" stroke-width="2" fill="none"/></svg>');
  
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 2.5vw;
`;

const SearchBtn = styled.button`
  background-color: #f8f9fa;
  border: 0.07em solid #f8f9fa;
  border-radius: 0.25em;
  color: #3c4043;
  padding: 0.625em 1em;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.07em 0.07em rgba(0, 0, 0, 0.1);
    border: 0.07em solid #dadce0;
  }
`;

//  Footer
const Footer = styled.footer`
  background-color: #f2f2f2;
  padding: 15px 20px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
`;

const FooterTop = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: #70757a;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  a {
    text-decoration: none;
    color: #70757a;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const GoogleInReact = () => {
    return (
        <>
            <GlobalStyle />
            <Header>
                <NavLinks>
                    <a href="#">Gmail</a>
                    <a href="#">Imágenes</a>
                    <MenuIcon tabIndex="0" aria-label="Aplicaciones de Google">
                        {[...Array(9)].map((_, i) => (
                            <span key={i} className="dot" />
                        ))}
                    </MenuIcon>
                    <ProfileIcon tabIndex="0" aria-label="Perfil">
                        <img src="https://www.gravatar.com/avatar/?d=mp" alt="Perfil" />
                    </ProfileIcon>
                </NavLinks>
            </Header>

            <Main>
                <Logo>
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="Google Logo"
                    />
                </Logo>

                <SearchContainer>
                    <SearchBox>
                        <IconSearch htmlFor="main-search" />
                        <SearchInput id="main-search" aria-label="Buscar" />
                        <IconCamera htmlFor="main-search" />
                    </SearchBox>
                    <Buttons>
                        <SearchBtn>Buscar con Google</SearchBtn>
                        <SearchBtn>Voy a tener suerte</SearchBtn>
                    </Buttons>
                </SearchContainer>
            </Main>

            <Footer>
                <FooterTop>
                    <span>Colombia</span>
                </FooterTop>
                <FooterBottom>
                    <FooterLinks>
                        <a href="#">Sobre Google</a>
                        <a href="#">Publicidad</a>
                        <a href="#">Negocios</a>
                        <a href="#">Cómo funciona la Búsqueda</a>
                        <a href="#">Privacidad</a>
                        <a href="#">Condiciones</a>
                        <a href="#">Preferencias</a>
                    </FooterLinks>
                </FooterBottom>
            </Footer>
        </>
    );
};
