import React from "react";
import { GlobalStyle, Header, NavLinks, ProfileIcon, MenuIcon, Main, Logo, SearchContainer, SearchBox, IconSearch, SearchInput, IconCamera, Buttons, SearchBtn, Footer, FooterTop, FooterBottom, FooterLinks} from "./style"; 
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
