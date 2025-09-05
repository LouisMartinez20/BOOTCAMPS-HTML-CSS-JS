import React from "react";
import {
  SectionTwoContainer,
  TitleTwo,
  Notice,
  ContinueLinkTwo,
  DotsContainer,
} from "./SectionStyles";
const SectionTwo = () => {
  return (
    <SectionTwoContainer className="section-two">
      <TitleTwo className="latest-news-title">Latest News</TitleTwo>
      <Notice className="notice-one">
        <span className="span">THE UPSHOT</span>
        <span className="date">May 19, 2020</span>
        <h3>
          A Wave of Small Business Closures Is on the Way. Can Washington Stop
          It?
        </h3>
        <ContinueLinkTwo href="#">continue reading</ContinueLinkTwo>
      </Notice>
      <Notice className="notice-two">
        <span className="span">NEWS ANALYSIS</span>
        <span className="date">May 19, 2020</span>
        <h3>
          Coronavirus Shut Down the 'Experience Economy'. Can It Come Back?
        </h3>
        <ContinueLinkTwo href="#">continue reading</ContinueLinkTwo>
      </Notice>
      <DotsContainer className="dots">
        <button></button>
        <button></button>
        <button></button>
      </DotsContainer>
    </SectionTwoContainer>
  );
};
export default SectionTwo;
