import React from "react";
import {
  HeadingSection,
  SnapshotContainer,
  Breadcrumbs,
  FullOverviewButton,
} from "./style";
const FooterHeading = () => {
  const breadcrumbs = ["Futures", "Americas", "Europe", "Asia", "Commodities"];
  return (
    <HeadingSection className="heading">
      <SnapshotContainer className="snapshot">
        <span className="title">Market Snapshot</span>
        <span className="hour">6:07 AM</span>
      </SnapshotContainer>
      <Breadcrumbs className="breadcrumbs">
        {breadcrumbs.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </Breadcrumbs>
      <FullOverviewButton>
        Full Market Overview
        <span className="material-symbols-outlined">chevron_right</span>
      </FullOverviewButton>
    </HeadingSection>
  );
};
export default FooterHeading;
