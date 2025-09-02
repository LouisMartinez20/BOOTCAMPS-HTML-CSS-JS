import React from "react";
import *as S from "./style";
export const GoogleInReact = () => {
    return (
        <>
        <S.GlobalStyle />
            <S.Header>
                <S.NavLinks>
                    <a href="#">Gmail</a>
                    <a href="#">Imágenes</a>
                    <S.MenuIcon tabIndex="0" aria-label="Aplicaciones de Google">
                        {[...Array(9)].map((_, i) => (
                            <span key={i} className="dot" />
                        ))}
                    </S.MenuIcon>
                    <S.ProfileIcon tabIndex="0" aria-label="Perfil">
                        <img src="https://www.gravatar.com/avatar/?d=mp" alt="Perfil" />
                    </S.ProfileIcon>
                </S.NavLinks>
            </S.Header>
            <S.Main>
                <S.Logo>
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="Google Logo"
                    />
                </S.Logo>
                <S.SearchContainer>
                    <S.SearchBox>
                        <S.IconSearch htmlFor="main-search" />
                        <S.SearchInput id="main-search" aria-label="Buscar" />
                        <S.IconCamera htmlFor="main-search" />
                    </S.SearchBox>
                    <S.Buttons>
                        <S.SearchBtn>Buscar con Google</S.SearchBtn>
                        <S.SearchBtn>Voy a tener suerte</S.SearchBtn>
                    </S.Buttons>
                </S.SearchContainer>
            </S.Main>
            <S.Footer>
                <S.FooterTop>
                    <span>Colombia</span>
                </S.FooterTop>
                <S.FooterBottom>
                    <S.FooterLinks>
                        <a href="#">Sobre Google</a>
                        <a href="#">Publicidad</a>
                        <a href="#">Negocios</a>
                        <a href="#">Cómo funciona la Búsqueda</a>
                        <a href="#">Privacidad</a>
                        <a href="#">Condiciones</a>
                        <a href="#">Preferencias</a>
                    </S.FooterLinks>
                </S.FooterBottom>
            </S.Footer>
            </>
    );
};
