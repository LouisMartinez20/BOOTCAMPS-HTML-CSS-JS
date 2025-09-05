import React from "react";
import {
  SectionContainer,
  SectionHeader,
  Title,
  Description,
  ContinueLink,
} from "./SectionStyles";
const SectionOne = () => {
  return (
    <SectionContainer className="section-one">
      <SectionHeader className="section-one-header">
        <div className="image-container">
          <img
            src="https://static01.nyt.com/images/2020/05/20/business/20Techfix-illo/20Techfix-illo-jumbo.gif?quality=75&auto=webp"
            alt="section-one-image"
          />
        </div>
        <span className="span">TECHFIX </span>
        <span className="date"> may 20, 2020</span>
      </SectionHeader>
      <Title>Everything You Need to Know About Slow Internet Speeds</Title>
      <Description>
        Our crummy connections are the biggest tech headache in the pandemic.
        Here's a comprehensive guide to what to do about them.
      </Description>
      <ContinueLink href="#">continue reading</ContinueLink>
    </SectionContainer>
  );
};
export default SectionOne;
