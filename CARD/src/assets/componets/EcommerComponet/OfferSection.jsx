// OfferSection.jsx
import React from "react";
import {
  Label,
  Offer,
  Field,
  CurrencySymbol,
  Input,
  Select,
  Pill,
  QuickButtons,
  QuickButton,
  Banner,
  Dot,
  BannerText,
} from "./style";
const OfferSection = () => {
  return (
    <>
      <Label>Your Offer</Label>
      <Offer>
        <Field role="group" aria-label="Your offer">
          <CurrencySymbol>$</CurrencySymbol>
          <Input
            type="text"
            inputMode="decimal"
            defaultValue="4800.00"
            aria-label="Amount"
          />
          <Select aria-label="Currency" defaultValue="AUD">
            <option value="AUD">AUD</option>
          </Select>
          <Pill>+$49 shipping</Pill>
        </Field>
      </Offer>
      <QuickButtons>
        <QuickButton>5% Off</QuickButton>
        <QuickButton>10% Off</QuickButton>
        <QuickButton>15% Off</QuickButton>
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
export default OfferSection;
