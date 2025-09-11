import styled from "styled-components";
export const StyledSidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  background: #181b21;
  color: #ffffff;
  border-right: 1px solid #252a31;
  font-family: "Inter", system-ui, sans-serif;
  position: relative;
  overflow: hidden;
  img[data-sidebar-icon="true"] {
    filter: brightness(0) invert(1);
  }
`;
export const StyledSidebarDecor = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background: radial-gradient(
      circle at 0% 80%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at -10% 120%,
      rgba(255, 255, 255, 0.12) 0%,
      transparent 60%
    );
  mix-blend-mode: overlay;
`;
export const StyledTopSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
export const StyledSeparator = styled.div`
  height: 1px;
  background: #252a31;
  margin: 16px 0;
`;
export const StyledMenuScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px 8px;
  position: relative;
`;
export const StyledProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  text-align: center;
  position: relative;
`;
export const StyledAvatarOuter = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background: linear-gradient(145deg, #6d4bff, #a063ff);
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const StyledAvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #262b33;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
export const StyledAvatarInitial = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
`;
export const StyledAvatarOverlayButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(5%, 5%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background: #ffffff;
  color: #181b21;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: box-shadow 0.15s, transform 0.15s;
  &:hover {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
  }
  &:active {
    transform: translate(25%, 25%) scale(0.94);
  }
  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(109, 75, 255, 0.55);
  }
`;
export const StyledName = styled.div`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #ffffff;
`;
export const StyledRole = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #b0b7c3;
  letter-spacing: 0.2px;
`;
export const StyledInfoFieldsBlock = styled.div`
  padding: 12px 16px 4px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
  gap: 10px;
`;
export const StyledInfoFieldRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  line-height: 1.2;
  position: relative;
`;
export const StyledInfoFieldIconWrap = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #20252d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
export const StyledInfoFieldTexts = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;
export const StyledInfoFieldValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.2px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const StyledInfoFieldLabel = styled.div`
  margin-top: 3px;
  font-size: 11px;
  font-weight: 500;
  color: #b0b7c3;
  letter-spacing: 0.3px;
`;
export const StyledMenuBlock = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
  margin: 0 20px;
`;
export const StyledMenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 8px;
  line-height: 1.2;
  text-align: left;
  position: relative;
  cursor: pointer;
  transition: background 140ms ease;
  &:hover {
    background: #1f242c;
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(109, 75, 255, 0.45);
  }
  &.is-active {
    background: #1f242c;
  }
  &.is-active.has-accent-bar::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 3px;
    border-radius: 2px;
    background: #6d4bff;
  }
`;
export const StyledMenuItemIcon = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
export const StyledMenuItemLabel = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const StyledMenuItemAction = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
`;
export const StyledToggleVisual = styled.span`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #30343b;
  transition: background 140ms ease, border-color 140ms ease;
  .is-on & {
    background: #6d4bff;
    border-color: #6d4bff;
  }
`;
export const StyledToggleThumb = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #2a3037;
  transition: transform 140ms ease;
  transform: translateX(0);
  .is-on & {
    transform: translateX(20px);
  }
`;
export const StyledPromoCardWrapper = styled.div`
  flex-shrink: 0;
  padding: 0 16px 20px 16px;
`;
export const StyledPromoBlock = styled.div`
  margin: 0;
  padding: 18px 16px 18px 16px;
  background: #10141c;
  border: 1px solid #2a3038;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 160px;
  font-size: 13px;
  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    width: 180px;
    height: 180px;
    background: radial-gradient(
      circle at center,
      rgba(109, 75, 255, 0.35) 0%,
      transparent 65%
    );
    opacity: 0.45;
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    right: -60px;
    width: 220px;
    height: 220px;
    background: radial-gradient(
      circle at center,
      rgba(160, 99, 255, 0.25) 0%,
      transparent 70%
    );
    opacity: 0.4;
    pointer-events: none;
  }
`;
export const StyledPromoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.2px;
  margin-bottom: 6px;
`;
export const StyledPromoHighlight = styled.span`
  color: #00c27a;
  font-weight: 600;
`;
export const StyledPromoDescription = styled.div`
  font-size: 15px;
  line-height: 1.45;
  font-weight: 500;
  color: #b0b7c3;
  margin-bottom: 16px;
  letter-spacing: 0.2px;
`;
export const StyledPromoButton = styled.button`
  background: linear-gradient(90deg, #6d4bff, #8e53ff);
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  line-height: 1;
  box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.4);
  transition: filter 140ms ease, transform 140ms ease;
  &:hover {
    filter: brightness(1.07);
  }
  &:active {
    transform: translateY(1px);
    filter: brightness(0.92);
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(109, 75, 255, 0.45);
  }
`;
