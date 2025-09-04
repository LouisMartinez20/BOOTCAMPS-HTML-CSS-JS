import React from 'react';
import styled from 'styled-components';
import FooterHeading from './FooterHeading';
import MarketCards from './MarketCards';

const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px dashed #bbb;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 0.5em 4em 0.5em 4em;
  text-align: center;
  z-index: 100;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading />
      <MarketCards />
    </FooterContainer>
  );
};

export default Footer;