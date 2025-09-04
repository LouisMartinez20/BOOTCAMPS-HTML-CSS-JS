import React from "react";
import {
  GlobalStyle,
  Stage,
  Card,
  Chip,
  Number,
  Expiry,
  Date,
  Info,
  Name,
  Logo,
  Circle,
} from "./style";

const CreditCard = () => {
  return (
    <>
      <GlobalStyle />
      <Stage>
        <Card>
          <Chip />
          <Number>2671 9860 8300 0202</Number>

          <Expiry>
            <Info>
              EXPIRES <br /> END
            </Info>
            <Date>11/22</Date>
          </Expiry>

          <Name>CLARK DOE</Name>

          <Logo>
            <Circle color="#ff3b3b" overlap />
            <Circle color="#ff9c2bad" />
          </Logo>
        </Card>
      </Stage>
    </>
  );
};

export default CreditCard;
