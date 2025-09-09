import {
  Card,
  Firm,
  TitleText,
  ValueText,
  Container,
  Information,
  Ratings,
  HourContainer,
  MaterialIcon,
} from "./StyledFooterContainer";
function getTrend({ percentage, value }) {
  if (typeof percentage === "string" && percentage.trim() !== "") {
    const n = parseFloat(percentage.replace("%", "").replace(",", "."));
    if (Number.isFinite(n)) {
      if (n > 0) return "up";
      if (n < 0) return "down";
      return "neutral";
    }
  }
  if (typeof value === "string" && value.trim() !== "") {
    const sign = value.trim()[0];
    if (sign === "+") return "up";
    if (sign === "-") return "down";
  }
  return "neutral";
}
export const MarketCard = (props) => {
  const { title, value, price, percentage, time } = props;
  const trend = getTrend({ percentage, value });
  return (
    <Card $trend={trend}>
      <Firm>
        <TitleText>{title}</TitleText>
        <ValueText>{value}</ValueText>
      </Firm>
      <Container>
        <Information>
          <Ratings>
            <span>{price}</span>
            <span>{percentage}</span>
          </Ratings>
          <HourContainer>
            <MaterialIcon $size="16px">nest_clock_farsight_analog</MaterialIcon>
            <span>{time}</span>
          </HourContainer>
        </Information>
      </Container>
    </Card>
  );
};