import styled, { createGlobalStyle } from "styled-components";

// estilos globales
export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// contenedor general
export const Stage = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
`;

// tarjeta principal
export const Card = styled.div`
  width: 400px;
  height: 250px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 28px 50px rgba(2, 8, 28, 0.65);
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// chip
export const Chip = styled.div`
  width: 50px;
  height: 38px;
  background: #cfc7a4;
  border-radius: 6px;
  position: relative;
  margin-top: auto;
`;

// número
export const Number = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 30px;
  letter-spacing: 3px;
  margin-bottom: 10px;
  color: #0b1830;
  text-align: center;
  margin-top: auto;
`;

// fecha
export const Expiry = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const Date = styled.div`
  font-size: 25px;
`;

export const Info = styled.div`
  text-align: end;
`;

// nombre
export const Name = styled.div`
  font-size: 16px;
  color: #0b1830;
  font-weight: 400;
`;

// logo mastercard
export const Logo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ color }) => color && `background: ${color};`}
  ${({ overlap }) => overlap && `margin-right: -12px;`}
`;

// patrón extra (si lo necesitas)
export const Pattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-auto-rows: 50px;
`;
