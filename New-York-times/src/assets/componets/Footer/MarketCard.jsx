import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-direction: column;
  font-size: 0.9rem;
  color: white;
  padding: 24px;
  display: flex;
  gap: 16px;
  background-color: ${props => {
    switch(props.color) {
      case 'green': return '#5b8c5c';
      case 'red': return '#cb495a';
      case 'black': return '#000';
      default: return '#ccc';
    }
  }};
  border-radius: 4px;
`;

const Firm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  
  .title {
    font-weight: bold;
  }
  
  .value {
    font-weight: bold;
  }
`;

const Container = styled.div`
  grid-template-columns: 1fr auto;
  display: grid;
  gap: 16px;
`;

const Information = styled.div`
  flex-direction: column;
  display: flex;
  gap: 16px;
`;

const Ratings = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  
  span:first-child {
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  span:last-child {
    font-weight: 500;
  }
`;

const HourContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  
  .material-symbols-outlined {
    font-size: 1.1rem;
  }
`;

const MarketCard = ({ title, value, price, percentage, time, color }) => {
  return (
    <Card className={`card ${color}`} color={color}>
      <Firm className="firm">
        <span className="title">{title}</span>
        <span className="value">{value}</span>
      </Firm>
      <Container className="container">
        <Information className="information">
          <Ratings className="ratings">
            <span>{price}</span>
            <span>{percentage}</span>
          </Ratings>
          <HourContainer className="hour">
            <span className="material-symbols-outlined">nest_clock_farsight_analog</span>
            <span>{time}</span>
          </HourContainer>
        </Information>
      </Container>
    </Card>
  );
};

export default MarketCard;