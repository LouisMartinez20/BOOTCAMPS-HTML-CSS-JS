import {
  StyledCard,
  StyledFirm,
  StyledTitleText,
  StyledValueText,
  StyledContainer,
  StyledInformation,
  StyledRatings,
  StyledHourContainer,
  StyledMaterialIcon,
} from "./styles";
function getTrend({ percentage, value }) {
  const clean = (str) =>
    String(str)
      .replace(",", ".")
      .replace(/[^0-9+-.]/g, "")
      .trim();
  if (percentage != null && String(percentage).trim() !== "") {
    const n = parseFloat(clean(percentage));
    if (Number.isFinite(n)) {
      if (n > 0) return "up";
      if (n < 0) return "down";
      return "neutral";
    }
  }
  if (value != null && String(value).trim() !== "") {
    const v = clean(value);
    if (v.startsWith("+")) return "up";
    if (v.startsWith("-")) return "down";
  }
  return "neutral";
}
export const MarketCard = ({ title, value, price, percentage, time }) => {
  const trend = getTrend({ percentage, value });
  return (
    <StyledCard $trend={trend}>
      <StyledFirm>
        <StyledTitleText title={title}>{title}</StyledTitleText>
        <StyledValueText>{value}</StyledValueText>
      </StyledFirm>
      <StyledContainer>
        <StyledInformation>
          <StyledRatings>
            <span>{price}</span>
            <span>{percentage}</span>
          </StyledRatings>
          <StyledHourContainer>
            <StyledMaterialIcon $size="16px">
              nest_clock_farsight_analog
            </StyledMaterialIcon>
            <span>{time}</span>
          </StyledHourContainer>
        </StyledInformation>
      </StyledContainer>
    </StyledCard>
  );
};