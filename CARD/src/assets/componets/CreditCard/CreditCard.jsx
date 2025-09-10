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
  variant = "primary",
  number = "0000 0000 0000 0000",
  expiry = "00/00",
  name = "JOHN DOE",
}) => {
  return (
    <StyledCard $variant={variant}>
      <StyledChip $variant={variant} />
      <StyledNumber $variant={variant}>{number}</StyledNumber>
      <StyledExpiry>
        <StyledInfo $variant={variant}>
          EXPIRES <br /> END
        </StyledInfo>
        <StyledDate $variant={variant}>{expiry}</StyledDate>
      </StyledExpiry>
      <StyledName $variant={variant}>{name}</StyledName>
      <StyledLogo $variant={variant}>
        <StyledCircle $variant={variant} color="#ff3b3b" overlap />
        <StyledCircle $variant={variant} color="#ff9c2b" />
      </StyledLogo>
    </StyledCard>
  );
};
