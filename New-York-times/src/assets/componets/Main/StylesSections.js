import styled, { css } from "styled-components";
const colors = {
  divider: "#e0e0e0",
  textMuted: "grey",
  accent: "#567b95",
  black: "#000",
  white: "#fff",
};
const columnBase = css`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 4em 0;
  border-right: 2px dashed ${colors.divider};
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding: 1.5em 3% 3em 0;
  }
  @media (max-width: 640px) {
    padding: 1.25em 0 2.5em 0;
    border-right: none;
    border-bottom: 2px dashed ${colors.divider};
  }
`;
export const StyledSectionContainer = styled.div`
  ${columnBase}
`;
export const StyledSectionTwoContainer = styled.div`
  ${columnBase}
`;
export const StyledSectionThreeContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 0 4em 0;
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding: 1.5em 0 3em 0;
  }
  @media (max-width: 640px) {
    padding: 1.25em 0 2.5em 0;
    border-bottom: 2px dashed ${colors.divider};
  }
`;
export const StyledSectionHeader = styled.div`
  margin-bottom: 30px;
  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
`;
export const StyledImageContainer = styled.div`
  margin-bottom: 30px;
  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 2px;
    display: block;
  }
  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
`;
export const StyledTag = styled.span`
  color: ${colors.white};
  background-color: ${colors.black};
  padding: 10px;
  margin-right: 14px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
export const StyledDateText = styled.span`
  color: ${colors.black};
  font-size: 0.8rem;
  letter-spacing: 0.3px;
`;
export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0.5em 0;
  line-height: 1.2;
  @media (max-width: 900px) {
    font-size: 2.1rem;
  }
  @media (max-width: 640px) {
    font-size: 1.9rem;
  }
`;
export const StyledTitleTwo = styled.h3`
  font-size: 25px;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.25;
`;
export const StyledTitleThree = styled.h3`
  font-size: 30px;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.3;
  @media (max-width: 900px) {
    font-size: 26px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;
export const StyledDescription = styled.p`
  font-size: 15px;
  color: ${colors.textMuted};
  line-height: 1.5;
  margin-bottom: 1.5em;
  max-width: 580px;
`;
const baseLink = css`
  color: ${colors.textMuted};
  text-decoration: none;
  padding-bottom: 14px;
  border-bottom: 1px solid ${colors.textMuted};
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  display: inline-block;
  text-transform: uppercase;
  &:hover {
    color: ${colors.accent};
    border-bottom-color: ${colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }
`;
export const StyledContinueLink = styled.a`
  ${baseLink}
`;
export const StyledContinueLinkTwo = styled.a`
  ${baseLink}
`;
export const StyledShowAllLink = styled.a`
  ${baseLink}
  margin-top: 1.5rem;
`;
export const StyledNotice = styled.div`
  padding-bottom: 40px;
  &:last-of-type {
    padding-bottom: 0;
  }
  @media (max-width: 640px) {
    padding-bottom: 28px;
  }
`;
export const StyledNoticeTag = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${colors.black};
  text-transform: uppercase;
  margin-right: 0.5rem;
  padding: 8px 10px;
  letter-spacing: 0.5px;
  border-radius: 2px;
`;
export const StyledNoticeDate = styled.span`
  font-size: 0.7rem;
  color: #888;
  letter-spacing: 0.4px;
`;
export const StyledNoticeTitle = styled.h3`
  font-size: 30px;
  margin: 0.5rem 0;
  line-height: 1.3;
  @media (max-width: 900px) {
    font-size: 26px;
  }
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;
export const StyledDotsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2.9em;
  align-items: center;
`;
export const StyledDot = styled.button`
  background-color: ${(p) => (p.$active ? colors.white : "#ccc")};
  border-radius: 50%;
  cursor: pointer;
  border: ${(p) => (p.$active ? "2px solid #000" : "2px solid transparent")};
  height: 16px;
  width: 16px;
  display: inline-block;
  padding: 0;
  transition: background-color 0.2s ease, transform 0.15s ease;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.9);
  }
  &:focus-visible {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }
`;
export const StyledNoticeThree = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #ddd;
  &:last-of-type {
    border-bottom: none;
  }
  img {
    width: 32%;
    max-width: 120px;
    aspect-ratio: 1 / 1;
    height: auto;
    max-height: 120px;
    object-fit: cover;
    align-self: center;
    margin-left: auto;
    border-radius: 2px;
  }
  @media (max-width: 640px) {
    img {
      max-width: 90px;
    }
  }
`;
export const StyledNoticeText = styled.div`
  width: 50%;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  h4 {
    width: 100%;
    margin: 10px 0 0 0;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 600;
  }
  p {
    width: 100%;
    margin: 10px 0 10px 0;
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
  }
  @media (max-width: 640px) {
    h4 {
      font-size: 0.95rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
