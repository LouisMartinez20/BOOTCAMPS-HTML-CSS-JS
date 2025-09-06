import React from "react";
import NoticesNav from "./NoticesNav";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import { MainContainer, SectionsContainer } from "./style";
const Main = () => {
  return (
    <MainContainer>
      <NoticesNav />
      <SectionsContainer className="sections">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </SectionsContainer>
    </MainContainer>
  );
};
export default Main;
