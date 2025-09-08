import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    background:#0d1430;
    color:#fff;
  }
`;

export const Stage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 40px clamp(20px, 4vw, 80px);
  overflow-x: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  gap: 48px;
  column-gap: 92px;
  justify-content: center;

`;

/* Variantes -------------------------------------------------- */

const ghostCard = css`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: none;
  color: rgba(255,255,255,0.55);
  position: relative;
  overflow:hidden;

  &:before {
    content:"";
    position:absolute;
    inset:0;
    background:
    opacity:.35;
    pointer-events:none;
  }

  &:hover {
    border-color: rgba(255,255,255,0.28);
  }
`;

const primaryCard = css`
  background: #ffffff;
  border-radius: 14px;
  border: none;
  box-shadow: 0 28px 50px rgba(2, 8, 28, 0.65);
  color: #0b1830;
`;

/* Card ------------------------------------------------------- */

export const Card = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 14px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: 0.4s ease;
  ${(p) => (p.$variant === "ghost" ? ghostCard : primaryCard)};
`;

/* Chip ------------------------------------------------------- */

export const Chip = styled.div`
  width: 58px;
  height: 40px;
  border-radius: 6px;
  margin-top: auto;
  background: linear-gradient(140deg, #d4cca9, #b7ac85);
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  ${(p) =>
    p.$variant === "ghost" &&
    css`
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: none;

      &:after,
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 40%;
        transform: translate(-50%, -50%);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 4px;
      }
      &:before {
        width: 36%;
        height: 70%;
      }
    `}
`;

/* Número ----------------------------------------------------- */

export const Number = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 30px;
  letter-spacing: 3px;
  margin: 14px 0 10px;
  color: ${(p) =>
    p.$variant === "ghost" ? "rgba(255,255,255,0.6)" : "#0b1830"};
  text-align: center;
  font-weight: 500;
`;

/* Expiry / Fecha -------------------------------------------- */

export const Expiry = styled.div`
  font-size: 12px;
  margin-bottom: 18px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 26px;
`;

export const Date = styled.div`
  font-size: 24px;
  font-family: "Space Mono", monospace;
  letter-spacing: 3px;
  color: ${(p) =>
    p.$variant === "ghost" ? "rgba(255,255,255,0.7)" : "#0b1830"};
`;

export const Info = styled.div`
  text-align: end;
  font-size: 11px;
  letter-spacing: 1px;
  line-height: 1.1;
  font-weight: 600;
  color: ${(p) => (p.$variant === "ghost" ? "rgba(255,255,255,0.55)" : "#666")};
`;

/* Nombre ---------------------------------------------------- */

export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
  color: ${(p) =>
    p.$variant === "ghost" ? "rgba(255,255,255,0.62)" : "#0b1830"};
`;

/* Logo Mastercard ------------------------------------------- */

export const Logo = styled.div`
  position: absolute;
  bottom: 18px;
  right: 22px;
  display: flex;
  align-items: center;
  mix-blend-mode: multiply;
  ${(p) =>
    p.$variant === "ghost" &&
    css`
      opacity: 0.5;
    `}
`;

export const Circle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["overlap", "color", "$variant"].includes(prop),
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ color }) => color && `background: ${color};`}
  ${({ overlap }) => overlap && `margin-right: -12px; z-index:1;`}
  ${({ $variant }) =>
    $variant === "ghost" &&
    css`
      background: transparent !important;
      border: 1px solid rgba(255, 255, 255, 0.4);
    `}
`;

/* Patrón decorativo esquina (sólo primary) ------------------ */
