import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
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
// Header y navegación
export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 0.625em;
`;
export const NavLinks = styled.nav`
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
export const ProfileIcon = styled.span`
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
export const MenuIcon = styled.span`
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
// Main
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 80px 0 60px 0;
`;
export const Logo = styled.div`
  margin-bottom: 30px;
  img {
    width: 272px;
    height: auto;
  }
`;
export const SearchContainer = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto 60px auto;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  background: #fff;
  margin-bottom: 20px;
    @media (max-width: 768px) {
    margin: 0 30px 30px 30px;
  }
`;
export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.625em 0;
  background: #fff;
`;
export const Icon = styled.label`
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
export const IconSearch = styled(Icon)`
  background-image: url('data:image/svg+xml;utf8,<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="gray" stroke-width="2" fill="none"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="gray" stroke-width="2" stroke-linecap="round"/></svg>');
`;
export const IconCamera = styled(Icon)`
  background-image: url('data:image/svg+xml;utf8,<svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="12" rx="2" stroke="gray" stroke-width="2" fill="none"/><circle cx="12" cy="13" r="3" stroke="gray" stroke-width="2" fill="none"/><rect x="9" y="3" width="6" height="4" rx="1" stroke="gray" stroke-width="2" fill="none"/></svg>');
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 2.5vw;
`;
export const SearchBtn = styled.button`
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
// Footer
export const Footer = styled.footer`
  background-color: #f2f2f2;
  padding: 15px 20px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
`;
export const FooterTop = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: #70757a;
`;
export const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
`;
export const FooterLinks = styled.div`
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
