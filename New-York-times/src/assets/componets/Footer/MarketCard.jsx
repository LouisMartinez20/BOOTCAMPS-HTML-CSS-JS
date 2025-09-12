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
function getTrendFromValue(value) {
  const cleaned = value.toString().trim();
  if (cleaned.startsWith("+")) return "up";
  if (cleaned.startsWith("-")) return "down";
  return "neutral";
}
export const MarketCard = (props) => {
  const trend = getTrendFromValue(props.value);
  return (
    <StyledCard data-trend={trend}>
      <StyledFirm>
        <StyledTitleText>{props.title}</StyledTitleText>
        <StyledValueText>{props.value}</StyledValueText>
      </StyledFirm>
      <StyledContainer>
        <StyledInformation>
          <StyledRatings>
            <span>{props.price}</span>
            <span>{props.percentage}</span>
          </StyledRatings>
          <StyledHourContainer>
            <StyledMaterialIcon>nest_clock_farsight_analog</StyledMaterialIcon>
            <span>{props.time}</span>
          </StyledHourContainer>
        </StyledInformation>
      </StyledContainer>
    </StyledCard>
  );
};