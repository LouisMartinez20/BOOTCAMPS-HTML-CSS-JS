import React from "react";
import {
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

const CreditCard = ({
  variant = "primary",
  number = "0000 0000 0000 0000",
  expiry = "00/00",
  name = "JOHN DOE",
}) => {
  return (
    <Card variant={variant}>


      <Chip variant={variant} />

      <Number variant={variant}>{number}</Number>

      <Expiry>
        <Info variant={variant}>
          EXPIRES <br /> END
        </Info>
        <Date variant={variant}>{expiry}</Date>
      </Expiry>

      <Name variant={variant}>{name}</Name>

      <Logo>
        <Circle color="#ff3b3b" overlap />
        <Circle color="#ff9c2b" />
      </Logo>
    </Card>
  );
};

export default CreditCard;