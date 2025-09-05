import React from "react";
import {
  Card,
  Firm,
  Container,
  Information,
  Ratings,
  HourContainer,
} from "./style";
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
            <span className="material-symbols-outlined">
              nest_clock_farsight_analog
            </span>
            <span>{time}</span>
          </HourContainer>
        </Information>
      </Container>
    </Card>
  );
};
export default MarketCard;
