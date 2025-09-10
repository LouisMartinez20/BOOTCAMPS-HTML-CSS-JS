import {
  Label,
  Offer,
  Field,
  FieldStart,
  FieldEnd,
  CurrencySymbol,
  Input,
  Select,
  Pill,
  OfferPill,
  QuickButtons,
  QuickButton,
  Banner,
  Dot,
  BannerText,
} from "./StylesdEcommerComponent";
export const OfferSection = (props) => {
  const amount = props.amount ?? "4800.00";
  const currency = props.currency ?? "AUD";
  const shipping = props.shipping ?? "49";
  return (
    <>
      <Label>Your Offer</Label>
      <Offer>
        <Field role="group" aria-label="Your offer">
          <FieldStart>
            <CurrencySymbol aria-hidden="true">$</CurrencySymbol>
            <Input
              type="text"
              inputMode="decimal"
              defaultValue={amount}
              aria-label="Amount"
            />
          </FieldStart>
          <FieldEnd>
            <Select aria-label="Currency" defaultValue={currency}>
              <option value="AUD">AUD</option>
            </Select>
            <Pill>+${shipping} shipping</Pill>
            <OfferPill>Offer</OfferPill>
          </FieldEnd>
        </Field>
      </Offer>
      <QuickButtons aria-label="Suggested discounts">
        <QuickButton type="button">5% Off</QuickButton>
        <QuickButton type="button">10% Off</QuickButton>
        <QuickButton type="button">15% Off</QuickButton>
      </QuickButtons>
      <Banner role="status" aria-live="polite">
        <Dot aria-hidden="true" />
        <BannerText>
          Transaction history shows that the offer amount you've entered is
          likely to be accepted!
        </BannerText>
      </Banner>
    </>
  );
};