import styled from "styled-components";
export const GlobalStyles = styled.div`
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
export const HeaderContainer = styled.header`
  width: 100%;
  height: 8em;
  padding: 0 4em;
  box-sizing: border-box;
`;
export const NavContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
export const NavSuperior = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0 2rem 0;
  border-bottom: 2px dashed #bbb;
  gap: 2rem;
  box-sizing: border-box;
`;
export const NavInferior = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  flex-wrap: wrap;
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: transparent;
  margin: 0;
  font-size: 12px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  &.button-subscribe {
    border: 1px solid #ccc;
  }
`;
export const SubscribeButton = styled(NavLink)`
  border: 1px solid #ccc;
`;
export const NYTLogo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 220px;
  height: auto;
`;
export const MaterialIcon = styled.span`
  color: ${(props) => props.color || "#000"};
  font-size: 20px;
`;
export const DateParagraph = styled.p`
  margin-left: 0;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  margin-right: 20px;
  flex-shrink: 0;
`;
export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  list-style: none;
  flex: 1;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  color: #666;
  box-sizing: border-box;
  overflow: visible;
`;
export const NavItem = styled.li`
  font-family: ${(props) =>
        props.$first
            ? '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'
            : "Georgia, serif"};
  font-weight: ${(props) => (props.$first ? "bold" : "normal")};
  white-space: nowrap;
  flex-shrink: 0;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    white-space: normal; 
  }
`;
export const DotsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: auto;
  background: #000;
  margin-left: auto;
  padding: 0.5em;
  border-radius: 3px;
  cursor: pointer;
  flex-shrink: 0; 
  &:hover {
    background: #333;
  }
`;
export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;
