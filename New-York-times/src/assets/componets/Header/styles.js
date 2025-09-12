import styled from "styled-components";
export const StyledHeaderContainer = styled.header`
  width: 100%;
  height: 8em;
  padding: 0 4em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    padding: 0 2em;
  }
  @media (max-width: 640px) {
    padding: 0 1em;
    height: auto;
  }
`;
export const StyledNavContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
export const StyledNavSuperior = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0 2rem 0;
  border-bottom: 2px dashed #bbb;
  gap: 2rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 640px) {
    padding: 0.75rem 0 1.25rem 0;
  }
`;
export const StyledNavInferior = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  gap: 1rem;
`;
export const StyledNavLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background: transparent;
  margin: 0;
  font-size: 12px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  border-radius: 4px;
  line-height: 1;
  &:hover {
    background: #f2f2f2;
  }
  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;
export const StyledSubscribeButton = styled(StyledNavLink)`
  border: 1px solid #ccc;
  font-weight: 600;
  letter-spacing: 0.5px;
  &:hover {
    background: #000;
    color: #fff;
    border-color: #000;
  }
`;
export const StyledNYTLogo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 220px;
  height: auto;
  flex-shrink: 0;
  @media (max-width: 640px) {
    max-width: 180px;
  }
`;
export const StyledMaterialIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const StyledDateParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  white-space: nowrap;
  margin-right: 20px;
  flex-shrink: 0;
  strong {
    font-weight: 600;
  }
  @media (max-width: 768px) {
    white-space: normal;
    line-height: 1.3;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const StyledNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.9rem;
  list-style: none;
  flex: 1;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  color: #444;
  box-sizing: border-box;
  overflow: visible;
  @media (max-width: 1100px) {
    gap: 2rem;
  }
  @media (max-width: 900px) {
    gap: 1.25rem;
  }
  @media (max-width: 640px) {
    gap: 0.9rem;
  }
`;
export const StyledNavItem = styled.li`
  font-weight: ${(props) => (props.$first ? "bold" : "normal")};
  white-space: nowrap;
  flex-shrink: 0;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    transition: color 0.15s ease, text-decoration-color 0.15s ease;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
    &:focus-visible {
      outline: 2px solid #000;
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
  @media (max-width: 768px) {
    white-space: normal;
  }
  @media (max-width: 640px) {
    a {
      font-size: 12px;
    }
  }
`;
export const StyledDotsIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 70px;
  background: #000;
  margin-left: auto;
  padding: 0.5em;
  border-radius: 3px;
  cursor: pointer;
  flex-shrink: 0;
  border: none;
  &:hover {
    background: #333;
  }
  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  @media (max-width: 640px) {
    min-width: 56px;
    height: 56px;
  }
`;
export const StyledResponsiveContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
`;
export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;
