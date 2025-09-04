import styled, { createGlobalStyle } from 'styled-components';
// Estilos globales
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    background: radial-gradient(
        1200px 600px at 70% -10%,
        rgba(99, 102, 241, 0.2),
        transparent 60%
      ),
      radial-gradient(
        1000px 460px at -10% 0%,
        rgba(167, 139, 250, 0.25),
        transparent 55%
      ),
      linear-gradient(180deg, #eef2ff, #f8fafc);
    display: grid;
    place-items: center;
    color: #0f172a;
  }
`;
// Componentes individuales
export const Modal = styled.div`
  width: min(760px, 92vw);
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.12);
  padding: 28px;
  position: relative;
`;
export const CloseButton = styled.button`
  position: absolute;
  inset: 16px 16px auto auto;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 1px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;
export const Head = styled.div`
  display: grid;
  gap: 16px;
  align-items: center;
  margin-bottom: 18px;
`;
export const Tile = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: radial-gradient(
        circle at 8px 8px,
        rgba(255, 255, 255, 0.25) 2px,
        transparent 3px
      )
      0 0/14px 14px,
    radial-gradient(
        circle at 8px 8px,
        rgba(255, 255, 255, 0.25) 2px,
        transparent 3px
      )
      7px 7px/14px 14px,
    linear-gradient(135deg, #4338ca, #8b5cf6);
  display: grid;
  place-items: center;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
    fill: white;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  margin: 0 0 4px 0;
  font-weight: 700;
`;
export const Subtitle = styled.p`
  color: #64748b;
  font-size: 15px;
`;
export const Item = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  margin: 18px 0 8px;
  
  @media (max-width: 560px) {
    grid-template-columns: auto 1fr;
  }
`;
export const Thumb = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: #f2f4f8;
  display: grid;
  place-items: center;
  border: 1px solid #e6e8ee;
  
  svg {
    width: 28px;
    height: 28px;
    color: #111827;
    fill: #111827;
  }
`;
export const Info = styled.div`
  .name {
    font-weight: 600;
    font-size: 15px;
    line-height: 1.35;
    margin-bottom: 6px;
  }
`;
export const ShipInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 14px;
  
  a {
    color: #2563eb;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const RightColumn = styled.div`
  text-align: right;
  
  @media (max-width: 560px) {
    order: 3;
    text-align: left;
  }
`;
export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
  
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;
export const Shipping = styled.div`
  color: #64748b;
  font-size: 14px;
  margin-top: 4px;
`;
export const Label = styled.div`
  margin-top: 14px;
  font-weight: 600;
  font-size: 14px;
`;
export const Offer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
`;
export const Field = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  
  select {
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 14px;
    outline: none;
    padding-right: 2px;
  }
  
  input {
    border: none;
    outline: none;
    font-size: 18px;
    width: 100%;
    font-weight: 700;
  }
  
  &.offer-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: flex-start;
    
    input {
      flex: 1 1 auto;
      min-width: 80px;
    }
    
    select {
      margin-left: auto;
    }
  }
`;
export const Pill = styled.span`
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  
  &.offer-pill {
    margin-left: 8px;
    padding: 4px 12px;
    font-size: 0.95em;
    font-weight: 500;
    color: #333;
    align-self: flex-end;
  }
`;
export const CurrencySymbol = styled.span`
  font-weight: 600;
  margin-right: 4px;
`;
export const QuickButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
`;
export const QuickButton = styled.span`
  border: 1px solid #e5e7eb;
  background: rgba(118, 171, 241, 0.39);
  color: rgb(18, 51, 238);
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: default;
`;
export const Banner = styled.div`
  margin-top: 18px;
  padding: 14px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.18),
    rgba(167, 139, 250, 0.25)
  );
  border: 1px solid rgba(99, 102, 241, 0.25);
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  margin-top: 6px;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
`;
export const BannerText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #1f2937;
  
  strong {
    font-weight: 700;
  }
`;
export const MutedText = styled.span`
  color: #64748b;
`;
export const Spacer = styled.div`
  height: 4px;
`;
// En tu archivo style.js
export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  width: 100%;
  font-weight: 700;
  background: transparent;
`;
export const Select = styled.select`
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  padding-right: 2px;
`;