import React from 'react';
import styled from 'styled-components';

const HeadingSection = styled.section`
  grid-template-columns: auto 1fr auto;
  display: grid;
  padding: 10px 0;
  gap: 56px;
`;

const SnapshotContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  
  span:first-child {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  span,
  .hour {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const Breadcrumbs = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  
  a {
    text-decoration: none;
    color: #333;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
      color: #567b95;
    }
  }
`;

const FullOverviewButton = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: rgb(87, 87, 87);
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  border: none;
  gap: 8px;
  
  span {
    font-weight: bold;
    font-size: 15px;
  }
  
  .material-symbols-outlined {
    font-size: 20px;
    color: rgb(7, 7, 7);
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const FooterHeading = () => {
  return (
    <HeadingSection className="heading">
      <SnapshotContainer className="snapshot">
        <span className="title">Market Snapshot</span>
        <span className="hour">6:07 AM</span>
      </SnapshotContainer>
      <Breadcrumbs className="breadcrumbs">
        <a href="#">Futures</a>
        <a href="#">Americas</a>
        <a href="#">Europe</a>
        <a href="#">Asia</a>
        <a href="#">Commodities</a>
      </Breadcrumbs>
      <FullOverviewButton>
        Full Market Overview
        <span className="material-symbols-outlined">chevron_right</span>
      </FullOverviewButton>
    </HeadingSection>
  );
};

export default FooterHeading;