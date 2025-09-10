import styled, { css, createGlobalStyle } from "styled-components";
// Global style (prefijado como StyledGlobalStyle para consistencia)
export const StyledGlobalStyle = createGlobalStyle`
  body {
    background-color: #FBE9E7;
    margin: 0;
  }
`;
export const StyledPageCenter = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
export const StyledCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 8px 28px -6px rgba(27, 33, 48, 0.08),
    0 2px 4px rgba(27, 33, 48, 0.06);
  font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
`;
export const StyledImagePane = styled.div`
  width: 300px;
  min-height: 340px;
  position: relative;
  background: #ddd;
  flex-shrink: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
export const StyledMiddleNavigation = styled.nav`
  width: 90px;
  background: #fff;
  border-right: 1px solid #e6e8ec;
  border-left: 1px solid #e6e8ec;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const StyledContentPane = styled.div`
  flex: 1;
  padding: 40px 48px 44px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  text-align: center;
`;
const baseIcon = css`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  line-height: 1;
`;
export const StyledNavIcon = styled.span`
  ${baseIcon};
  font-size: 26px;
  color: inherit;
`;
export const StyledSmallIcon = styled.span`
  ${baseIcon};
  font-size: 20px;
  color: inherit;
`;
export const StyledNavItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 48px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const StyledNavItem = styled.li`
  position: relative;
  cursor: default;
  display: flex;
  align-items: center;
  padding: 8px 0;
  flex-direction: column;
  gap: 6px;
  color: #a2a9b3;
  font-size: 11px;
  letter-spacing: 0.4px;
  font-weight: 500;
  user-select: none;
  ${({ $active }) =>
    $active &&
    css`
      color: #6f7680;
      font-weight: 600;
      ${StyledNavIcon} {
        color: #ffa400;
      }
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 6px;
        height: calc(100% - 12px);
        width: 4px;
        background: #ffa400;
        border-radius: 4px;
      }
    `}
`;
export const StyledTopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const StyledTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  margin-right: auto;
  text-align: left;
`;
export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2b2f33;
  line-height: 1.15;
  letter-spacing: 0.2px;
`;
export const StyledSubline = styled.div`
  font-size: 12.5px;
  color: #6f7680;
  a {
    color: blue;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const StyledActionsMenu = styled.button`
  all: unset;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  color: #6f7680;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #f4f5f8;
    color: #2b2f33;
  }
`;
export const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-items: start;
`;
export const StyledSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
`;
export const StyledSectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #6f7680;
`;
export const StyledInfoLines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  font-size: 13px;
  line-height: 1.35;
  color: #6f7680;
  max-width: 480px;
  text-align: left;
`;
export const StyledEditButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  color: #a2a9b3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f4f5f8;
    color: #6f7680;
  }
`;
export const StyledMuted = styled.span`
  color: #a2a9b3;
`;
export const StyledPhoneMuted = styled(StyledMuted)`
  margin-left: 10px;
`;
export const StyledRadioBullet = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid #e6e8ec;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
  background: #fff;
  flex-shrink: 0;
  position: relative;
`;
export const StyledChoiceLabel = styled.span`
  display: inline-block;
  color: inherit;
  line-height: 1.35;
`;
export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 4px;
  width: 100%;
  max-width: 480px;
`;
export const StyledDeliveryChoice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  font-size: 13px;
  color: #2b2f33;
  line-height: 1.3;
  user-select: none;
  text-align: left;
  outline: none;
  cursor: default;
  ${({ $checked }) =>
    $checked &&
    css`
      ${StyledRadioBullet} {
        border-color: #8b5cf6;
      }
      ${StyledRadioBullet}::after {
        content: "";
        width: 16px;
        height: 16px;
        background: #8b5cf6;
        border-radius: 50%;
        display: block;
      }
    `}
  &:focus-visible ${StyledRadioBullet} {
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.35);
  }
`;
