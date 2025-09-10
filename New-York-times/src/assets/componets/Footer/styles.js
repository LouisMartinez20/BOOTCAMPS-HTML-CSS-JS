import styled from "styled-components";
export const StyledFooterContainer = styled.footer`
  border-top: 1px dashed #bbb;
  padding: 0.5em 4em;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0.5em 1em;
  }
`;
export const StyledHeadingSection = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 24px;
  padding: 10px 0;
  width: 100%;
  @media (max-width: 1024px) {
    gap: 16px;
    grid-template-columns: 1fr auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    text-align: center;
  }
`;
export const StyledSnapshotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const StyledSnapshotTitle = styled.span`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
export const StyledSnapshotHour = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  max-width: 100%;
`;
export const StyledBreadcrumbs = styled.nav`
  display: flex;
  align-items: start;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: start;
  @media (max-width: 480px) {
    gap: 8px;
  }
`;
export const StyledBreadcrumbLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
    color: #567b95;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const StyledMaterialIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: ${(p) => p.$size || "18px"};
  color: ${(p) => p.$color || "rgb(7, 7, 7)"};
  line-height: 1;
`;
export const StyledFullOverviewButton = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: rgb(87, 87, 87);
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  border: none;
  gap: 8px;
  white-space: nowrap;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;
export const trendBg = {
  up: "#5b8c5c",
  down: "#cb495a",
  neutral: "#000",
};
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: white;
  padding: 16px;
  gap: 12px;
  background-color: ${(p) => trendBg[p.$trend] || "#ccc"};
  border-radius: 4px;
  min-width: 0;
`;
export const StyledFirm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const StyledTitleText = styled.span`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-width: 100%;
`;
export const StyledValueText = styled.span`
  font-weight: bold;
  white-space: nowrap;
  word-break: break-word;
`;
export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;
export const StyledRatings = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  span:first-child {
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;
  }
  span:last-child {
    font-weight: 500;
  }
`;
export const StyledHourContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;