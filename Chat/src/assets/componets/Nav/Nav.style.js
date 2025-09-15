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
  width: 54px;
  height: 54px;
`;
export const StyledMiniAvatarImage = styled.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`;
export const StyledMiniStatusDot = styled.span`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  display: none;
  background: var(--dot, transparent);
`;
export const StyledMiniAvatarRing = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--ring, #eeeeee);
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px var(--highlight, transparent);
  &[data-dot="true"] ${StyledMiniStatusDot} {
    display: block;
  }
`;
export const StyledMiniAvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--inner, #ffffff);
`;
