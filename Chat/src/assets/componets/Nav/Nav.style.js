import styled, { css } from "styled-components";
export const StyledNavContainer = styled.div`
  min-height: 70px;
  background: #fff;
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 48px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
`;
export const StyledNavSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
export const StyledSearchWrapper = styled.label`
  display: flex;
  align-items: center;
  background: #f5f6f7;
  color: #1e2227;
  padding: 0 10px;
  border-radius: 24px;
  height: 34px;
  max-width: 30%;
  flex: 1;
  position: relative;
  font-size: 13px;
  gap: 6px;
  margin-left: auto;
  .icon {
    font-size: 14px;
    display: flex;
    align-items: center;
    opacity: 0.6;
    img {
      width: 14px;
      height: 14px;
      display: block;
    }
  }
`;
export const StyledSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 13px;
  color: #1e2227;
  line-height: 1;
`;
export const StyledNewChatButton = styled.button`
  background: #fff;
  margin-left: auto;
  color: #1e2227;
  border: none;
  border-radius: 30px;
  height: 42px;
  margin-right: 44px;
  padding: 0 22px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  line-height: 1;
`;
const avatarSize = "54px";
const innerSize = "100%";
const dotSize = "18px";
const baseRing = css`
  width: ${avatarSize};
  height: ${avatarSize};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const baseInner = css`
  width: ${innerSize};
  height: ${innerSize};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const baseDot = css`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${dotSize};
  height: ${dotSize};
  border-radius: 50%;
  display: block;
`;
export const StyledProfilesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 4px 8px;
`;
export const StyledMiniProfileBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledMiniAvatarImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`;
export const StyledMiniAvatarRing1 = styled.div`
  ${baseRing};
  background: #f4d27d;
  box-shadow: 0 0 0 2px #ffffff;
`;
export const StyledMiniAvatarInner1 = styled.div`
  ${baseInner};
  background: #f4d27d;
`;
export const StyledMiniStatusDot1 = styled.span`
  ${baseDot};
  background: #747474ff;
  border: 2px solid #ffffff;
`;
export const StyledMiniAvatarRing2 = styled.div`
  ${baseRing};
  background: #f8f7beff;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #20e7b2;
  border-radius: 50%;
`;
export const StyledMiniAvatarInner2 = styled.div`
  ${baseInner};
  background: #ffffff;
`;
export const StyledMiniStatusDot2 = styled.span`
  ${baseDot};
  background: #20e7b2;
  border: 2px solid #ffffff;
`;
export const StyledMiniAvatarRing3 = styled.div`
  ${baseRing};
  background: #c6bafc;
  box-shadow: 0 0 0 2px #ffffff;
`;
export const StyledMiniAvatarInner3 = styled.div`
  ${baseInner};
  background: #c6bafc;
`;
export const StyledMiniStatusDot3 = styled.span`
  ${baseDot};
  background: #727274ff;
  border: 2px solid #ffffff;
`;
export const StyledMiniAvatarRing4 = styled.div`
  ${baseRing};
  background: #e1e3e7;
  box-shadow: 0 0 0 2px #ffffff;
`;
export const StyledMiniAvatarInner4 = styled.div`
  ${baseInner};
  background: #e1e3e7;
`;
export const StyledMiniAvatarRing5 = styled.div`
  ${baseRing};
  background: #f3a8b4;
  box-shadow: 0 0 0 2px #ffffff;
`;
export const StyledMiniAvatarInner5 = styled.div`
  ${baseInner};
  background: #f3a8b4;
`;
export const StyledMiniAvatarRing6 = styled.div`
  ${baseRing};
  background: #c6bafc;
  box-shadow: 0 0 0 2px #ffffff;
`;
export const StyledMiniAvatarInner6 = styled.div`
  ${baseInner};
  background: #c6bafc;
`;