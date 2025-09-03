// components/style.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", Arial, sans-serif;
    background: #faeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1 {
    font-size: 18px;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #5f5de5; /* Morado */
  }

  input[type="radio"] {
    accent-color: #9b5de5; /* Morado */
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
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 45%;
    object-fit: cover;
  }
`;

export const IconsContainer = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
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
  color: #a5a4a45e;
  font-size: 24px;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 30px;
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  margin-bottom: 60px;
  cursor: pointer;
`;

export const Info = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 60px;
`;

export const Option = styled.label`
  margin: 10px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
