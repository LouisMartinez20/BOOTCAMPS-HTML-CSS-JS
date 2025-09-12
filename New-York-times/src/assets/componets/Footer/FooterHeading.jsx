import {
  StyledHeadingSection,
  StyledSnapshotContainer,
  StyledSnapshotTitle,
  StyledSnapshotHour,
  StyledBreadcrumbs,
  StyledBreadcrumbLink,
  StyledFullOverviewButton,
  StyledMaterialIcon,
} from "./styles";
export const FooterHeading = ({
  title = "Market Snapshot",
  hour = "6:07 AM",
  breadcrumbs = ["Futures", "Americas", "Europe", "Asia", "Commodities"],
  overviewText = "Full Market Overview",
  
}) => {
  return (
    <StyledHeadingSection>
      <StyledSnapshotContainer>
        <StyledSnapshotTitle>{title}</StyledSnapshotTitle>
        <StyledSnapshotHour>{hour}</StyledSnapshotHour>
      </StyledSnapshotContainer>
      <StyledBreadcrumbs aria-label="Market sections">
        {breadcrumbs.map((item) => (
          <StyledBreadcrumbLink key={item} href="#">
            {item}
          </StyledBreadcrumbLink>
        ))}
      </StyledBreadcrumbs>
      <StyledFullOverviewButton >
        {overviewText}
        <StyledMaterialIcon>chevron_right</StyledMaterialIcon>
      </StyledFullOverviewButton>
    </StyledHeadingSection>
  );
};