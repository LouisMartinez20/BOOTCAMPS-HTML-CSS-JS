import styled, { createGlobalStyle } from "styled-components";
export const StyledGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    background: #f5f7fa;
    color: #0f172a;
    justify-content: center;
    align-items: center;
`;
export const StyledModal = styled.section`
  width: min(560px, 92vw);
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 18px 38px -10px rgba(15, 23, 42, 0.18),
  0 4px 10px rgba(15, 23, 42, 0.08);
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
  transition: background 0.15s, box-shadow 0.15s;

`;
export const StyledIconClose = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 20px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: #334155;
`;
export const StyledHead = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  margin-bottom: 20px;
`;
export const StyledTile = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4338ca, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
`;
export const StyledHeaderIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 34px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  user-select: none;
`;
export const StyledTitle = styled.h1`
  font-size: 26px;
  line-height: 1.2;
  margin: 0 0 4px;
  font-weight: 700;
  color: #1e2430;
`;
export const StyledSubtitle = styled.p`
  color: #64748b;
  font-size: 14px;
  margin: 0;
`;
export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px;
  margin: 12px 0 10px;
  background: #fff;
  align-items: flex-start;

`;
export const StyledThumb = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: #f2f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e8ee;
  flex-shrink: 0;
  overflow: hidden;

`;
export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;
export const StyledProductName = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
  color: #1e2430;
`;
export const StyledShipInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #64748b;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const StyledShipIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-size: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  flex-shrink: 0;
  user-select: none;
`;
export const StyledRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
  min-width: 90px;
`;
export const StyledPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  @media (max-width: 560px) {
    font-size: 17px;
  }
`;
export const StyledShipping = styled.div`
  font-size: 12.5px;
  color: #6b7280;
`;
export const StyledLabel = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #1e2430;
`;
export const StyledOffer = styled.div`
  margin-top: 10px;
`;
export const StyledField = styled.div`
  display: flex;
  align-items: stretch;
  gap: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  flex-wrap: wrap;
  background: #fff;
`;
export const StyledFieldStart = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 150px;
`;
export const StyledFieldEnd = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;
export const StyledCurrencySymbol = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #1f2937;
`;
export const StyledAmountValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  display: inline-block;
  min-width: 72px; /* similar ancho a un input de ese valor */
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
export const StyledPill = styled.span`
  padding: 6px 10px;
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
  border-left: 1px solid #e5e7eb;
  color: #374151;
`;
export const StyledOfferPill = styled(StyledPill)`
  border-left: 0;
  background: #f1f5f9;
  border-radius: 6px;
  font-weight: 500;
  padding: 6px 12px;
  color: #1e293b;
`;
export const StyledQuickButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
`;
export const StyledQuickButton = styled.button`
  border: 1px solid #e5e7eb;
  background: #eff6ff;
  color: #1d4ed8;
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;
`;
export const StyledBanner = styled.div`
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: 14px;
  background: linear-gradient(90deg, #ffffff 0%, #ede9fe 90%);
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
  margin: 0;
  font-size: 15px;
  color: #1e2430;
  line-height: 1.35;
  strong {
    font-weight: 600;
  }
`;