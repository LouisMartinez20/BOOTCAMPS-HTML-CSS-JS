import {
  StyledLabel,
  StyledOffer,
  StyledField,
  StyledFieldStart,
  StyledFieldEnd,
  StyledCurrencySymbol,
  StyledInput,
  StyledSelect,
  StyledPill,
  StyledOfferPill,
  StyledQuickButtons,
  StyledQuickButton,
  StyledBanner,
  StyledDot,
  StyledBannerText,
} from "./StylesdEcommerComponent";
export const OfferSection = (props) => {
  const amount = props.amount ?? "4800.00";
  const currency = props.currency ?? "AUD";
  const shipping = props.shipping ?? "49";
  return (
    <>
      <StyledLabel>Your Offer</StyledLabel>
      <StyledOffer>
        <StyledField role="group" aria-label="Your offer">
          <StyledFieldStart>
            <StyledCurrencySymbol aria-hidden="true">$</StyledCurrencySymbol>
            <StyledInput
              type="text"
              inputMode="decimal"
              defaultValue={amount}
              aria-label="Amount"
            />
          </StyledFieldStart>
          <StyledFieldEnd>
            <StyledSelect aria-label="Currency" defaultValue={currency}>
              <option value="AUD">AUD</option>
            </StyledSelect>
            <StyledPill>+${shipping} shipping</StyledPill>
            <StyledOfferPill>Offer</StyledOfferPill>
          </StyledFieldEnd>
        </StyledField>
      </StyledOffer>
      <StyledQuickButtons aria-label="Suggested discounts">
        <StyledQuickButton type="button">5% Off</StyledQuickButton>
        <StyledQuickButton type="button">10% Off</StyledQuickButton>
        <StyledQuickButton type="button">15% Off</StyledQuickButton>
      </StyledQuickButtons>
      <StyledBanner role="status" aria-live="polite">
        <StyledDot aria-hidden="true" />
        <StyledBannerText>
          Transaction history shows that the offer amount you've entered is
          likely to be accepted!
        </StyledBannerText>
      </StyledBanner>
    </>
  );
};
