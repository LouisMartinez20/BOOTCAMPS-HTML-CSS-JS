import styled, { createGlobalStyle } from "styled-components";
export const StyledGlobalStyle = createGlobalStyle`
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
export const StyledModal = styled.section`
  width: min(560px, 92vw);
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.12);
  padding: 28px;
  position: relative;
`;
export const StyledCloseButton = styled.button`
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
  transition: background 0.15s;
  &:hover {
    background: #f1f5f9;
  }
  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;
export const StyledHead = styled.header`
  display: grid;
  gap: 16px;
  align-items: center;
  margin-bottom: 18px;
`;
export const StyledTile = styled.div`
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
export const StyledTitle = styled.h1`
  font-size: 28px;
  line-height: 1.2;
  margin: 0 0 4px 0;
  font-weight: 700;
`;
export const StyledSubtitle = styled.p`
  color: #64748b;
  font-size: 15px;
  margin: 0;
`;
export const StyledItem = styled.div`
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
export const StyledThumb = styled.div`
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
export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledProductName = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.35;
  border-right: 1px solid #e5e7eb;
  padding-right: 12px;
  @media (max-width: 560px) {
    border-right: none;
    padding-right: 0;
  }
`;
export const StyledShipInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 14px;
  border-right: 1px solid #e5e7eb;
  padding-right: 12px;
  @media (max-width: 560px) {
    border-right: none;
    padding-right: 0;
  }
  a {
    color: #2563eb;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  svg {
    flex-shrink: 0;
  }
`;
export const StyledRightColumn = styled.div`
  text-align: right;
  @media (max-width: 560px) {
    order: 3;
    text-align: left;
  }
`;
export const StyledPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;
export const StyledShipping = styled.div`
  color: #64748b;
  font-size: 14px;
  margin-top: 4px;
`;
export const StyledLabel = styled.div`
  margin-top: 14px;
  font-weight: 600;
  font-size: 14px;
`;
export const StyledOffer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
export const StyledField = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  flex-wrap: wrap;
`;
export const StyledFieldStart = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 160px;
`;
export const StyledFieldEnd = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;
export const StyledPill = styled.span`
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  border-left: 1px solid #e5e7eb;
`;
export const StyledOfferPill = styled(StyledPill)`
  margin-left: 8px;
  padding: 4px 12px;
  font-size: 0.95em;
  font-weight: 500;
  color: #333;
  align-self: flex-end;
  border-left: 0;
  background: #f1f5f9;
  border-radius: 8px;
`;
export const StyledCurrencySymbol = styled.span`
  font-weight: 600;
  margin-right: 4px;
  font-size: 18px;
`;
export const StyledQuickButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
`;
export const StyledQuickButton = styled.button`
  border: 1px solid #e5e7eb;
  background: rgba(118, 171, 241, 0.39);
  color: rgb(18, 51, 238);
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: rgba(118, 171, 241, 0.55);
  }
  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;
export const StyledBanner = styled.div`
  margin-top: 18px;
  padding: 14px;
  border-radius: 16px;
  background: linear-gradient(90deg, #ffffff 0%, #e9d5ff 80%);
  border: 1px solid rgba(99, 102, 241, 0.25);
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
export const StyledDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  margin-top: 6px;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
  flex-shrink: 0;
`;
export const StyledBannerText = styled.p`
  margin: 0 10px 0 0;
  font-size: 18px;
  color: #121416ff;
  strong {
    font-weight: 700;
  }
`;
export const StyledMutedText = styled.span`
  color: #64748b;
`;
export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  width: 100%;
  font-weight: 700;
  background: transparent;
  color: #0f172a;
  &::placeholder {
    color: #94a3b8;
    font-weight: 500;
  }
`;
export const StyledSelect = styled.select`
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  padding-right: 2px;
  color: #0f172a;
  cursor: pointer;
`;
export const StyledSpacer = styled.div`
  height: 4px;
`;
