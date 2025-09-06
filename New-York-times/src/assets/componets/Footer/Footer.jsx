import React from "react";
import FooterHeading from "./FooterHeading";
import MarketCards from "./MarketCards";
import { FooterContainer } from "./style";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading />
      <MarketCards />
    </FooterContainer>
  );
};
export default Footer;
