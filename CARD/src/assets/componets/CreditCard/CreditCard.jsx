import {
  StyledCard,
  StyledChip,
  StyledNumber,
  StyledExpiry,
  StyledDate,
  StyledInfo,
  StyledName,
  StyledLogo,
  StyledCircle,
} from "./StyledCreditCardComponet";
export const CreditCard = ({
  variant = "",
  number = "",
  expiry = "",
  name = "",
}) => {
  return (
    <StyledCard variant={variant}>
      <StyledChip />
      <StyledNumber>{number}</StyledNumber>
      <StyledExpiry>
        <StyledInfo>
          EXPIRES <br /> END
        </StyledInfo>
        <StyledDate>{expiry}</StyledDate>
      </StyledExpiry>
      <StyledName>{name}</StyledName>
      <StyledLogo>
        <StyledCircle color="#ff3b3b" overlap />
        <StyledCircle color="#ff9c2b" />
      </StyledLogo>
    </StyledCard>
  );
};