// components/style.js
import styled, { createGlobalStyle } from "styled-components";
const colors = {
  primary: "#5f5de5",
  secondary: "#9b5de5",
  text: "#666",
  icon: "#a5a4a45e",
  white: "#fff",
};
export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100vh;
    background: #faeaea;
    margin: auto;
  }
  h1 {
    font-size: 18px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #4586e7ff;
  }
  input[type="radio"] {
    accent-color: ${colors.secondary};
    margin-right: 8px;
  }
  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }
`;
export const Card = styled.div`
  display: flex;
  background: ${colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
  margin: auto;
  img {
    flex: 1; 
    object-fit: cover;
    min-width: 250px;
  }
`
export const IconsContainer = styled.div`
  flex: 0.2; /* ocupa poco espacio */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 35px;
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.icon};
  font-size: 24px;
  cursor: pointer;
`;
export const Content = styled.div`
  flex: 1; 
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
`;
export const Subtitle = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: ${colors.text};
`;
export const Info = styled.div`
  font-size: 14px;
  color: ${colors.text};
`;
export const Option = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 0.5rem;
`;
