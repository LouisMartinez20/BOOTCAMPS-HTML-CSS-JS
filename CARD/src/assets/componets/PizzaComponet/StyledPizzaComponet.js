import styled, { css, createGlobalStyle } from "styled-components";
export const StyledGlobalStyle = createGlobalStyle`
  body {
    background-color: #FBE9E7;
    margin: 0;
    font-family: "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif;
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
  width: 100%;
  max-width: 880px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 8px 28px -6px rgba(27, 33, 48, 0.08);
  margin: 0 auto;
`;
export const StyledImagePane = styled.div`
  width: 300px;
  min-height: 340px;
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
  display: flex;
  flex-direction: column;
`;
export const StyledNavItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 48px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const baseIcon = css`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  user-select: none;
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
export const StyledNavItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  font-size: 11px;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: #a2a9b3;
  user-select: none;
  &::after {
    content: "";
    display: none;
  }
  &[data-active="true"] {
    color: #6f7680;
    font-weight: 600;
    ${StyledNavIcon} {
      color: #ffa400;
    }
    &::after {
      display: block;
      position: absolute;
      right: 0;
      top: 6px;
      height: calc(100% - 12px);
      width: 4px;
      background: #ffa400;
      border-radius: 4px;
      content: "";
    }
  }
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
  margin-right: auto;
  text-align: left;
  min-width: 0;
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
  padding: 6px 8px;
  border-radius: 8px;
  color: #6f7680;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-items: flex-start;
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
export const StyledEditButton = styled.button`
  all: unset;
  padding: 4px;
  border-radius: 6px;
  color: #a2a9b3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const StyledInfoLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  line-height: 1.35;
  color: #6f7680;
  max-width: 480px;
  text-align: left;
`;
export const StyledMuted = styled.span`
  color: #a2a9b3;
`;
export const StyledPhoneMuted = styled(StyledMuted)`
  margin-left: 10px;
`;
export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 4px;
  width: 100%;
  max-width: 480px;
`;
export const StyledRadioBullet = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid #e6e8ec;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  flex-shrink: 0;
`;
export const StyledChoiceLabel = styled.span`
  display: inline-block;
  color: inherit;
  line-height: 1.35;
`;
export const StyledDeliveryChoice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #2b2f33;
  line-height: 1.3;
  user-select: none;
  text-align: left;
  &[data-checked="true"] {
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
  }
`;