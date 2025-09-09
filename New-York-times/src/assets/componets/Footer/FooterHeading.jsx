import {
  HeadingSection,
  SnapshotContainer,
  SnapshotTitle,
  SnapshotHour,
  Breadcrumbs,
  BreadcrumbLink,
  FullOverviewButton,
  MaterialIcon,
} from "./StyledFooterContainer";
export const FooterHeading = (props) => {
  const {
    title = "Market Snapshot",
    hour = "6:07 AM",
    breadcrumbs = ["Futures", "Americas", "Europe", "Asia", "Commodities"],
    overviewText = "Full Market Overview",
    onOverviewClick,
  } = props;
  return (
    <HeadingSection>
      <SnapshotContainer>
        <SnapshotTitle>{title}</SnapshotTitle>
        <SnapshotHour>{hour}</SnapshotHour>
      </SnapshotContainer>
      <Breadcrumbs aria-label="Market sections">
        {breadcrumbs.map((item) => (
          <BreadcrumbLink key={item} href="#">
            {item}
          </BreadcrumbLink>
        ))}
      </Breadcrumbs>
      <FullOverviewButton type="button" onClick={onOverviewClick}>
        {overviewText}
        <MaterialIcon>chevron_right</MaterialIcon>
      </FullOverviewButton>
    </HeadingSection>
  );
};