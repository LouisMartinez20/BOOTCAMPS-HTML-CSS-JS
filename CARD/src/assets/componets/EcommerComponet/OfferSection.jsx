import {
  StyledLabel,
  StyledOffer,
  StyledField,
  StyledFieldStart,
  StyledFieldEnd,
  StyledCurrencySymbol,
  StyledAmountValue,
  StyledSelect,
  StyledPill,
  StyledQuickButtons,
  StyledQuickButton,
  StyledBanner,
  StyledDot,
  StyledBannerText,
} from "./StylesdEcommerComponent";
export const OfferSection = ({
  amount = "4800.00",
  currency = "AUD",
  shipping = "49",
}) => {
  return (
    <>
      <StyledLabel>Your Offer</StyledLabel>
      <StyledOffer>
        <StyledField>
          <StyledFieldStart>
            <StyledCurrencySymbol>$</StyledCurrencySymbol>
            <StyledAmountValue>{amount}</StyledAmountValue>
          </StyledFieldStart>
          <StyledFieldEnd>
            <StyledSelect defaultValue={currency}>
              <option value="AUD">AUD</option>
            </StyledSelect>
            <StyledPill>+${shipping} shipping</StyledPill>
          </StyledFieldEnd>
        </StyledField>
      </StyledOffer>
      <StyledQuickButtons>
        <StyledQuickButton>5% Off</StyledQuickButton>
        <StyledQuickButton>10% Off</StyledQuickButton>
        <StyledQuickButton>15% Off</StyledQuickButton>
      </StyledQuickButtons>
      <StyledBanner>
        <StyledDot />
        <StyledBannerText>
          Transaction history shows that the offer amount you've entered is
          likely to be accepted!
        </StyledBannerText>
      </StyledBanner>
    </>
  );
};
export default OfferSection;