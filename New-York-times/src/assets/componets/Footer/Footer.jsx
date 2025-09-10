import { FooterHeading } from "./FooterHeading";
import { MarketCards } from "./MarketCards";
import { StyledFooterContainer } from "./styles";
export const Footer = () => {
  const marketData = [
    {
      id: "dj-mini",
      title: "Dow Jones mini",
      value: "-40.00",
      price: "24394.00",
      percentage: "-0.51%",
      time: "7:13 AM",
    },
    {
      id: "nikkei-225",
      title: "Nikkei 225 Future",
      value: "+40.00",
      price: "20580.00",
      percentage: "+0.19%",
      time: "7:17 AM",
    },
    {
      id: "eur-usd",
      title: "EUR-USD",
      value: "+0.00014",
      price: "1.0994",
      percentage: "+0.13%",
      time: "7:39 AM",
    },
    {
      id: "ftse-100",
      title: "FTSE 100",
      value: "-28.85",
      price: "24394.00",
      percentage: "-0.48%",
      time: "7:41 AM",
    },
    {
      id: "sp500-mini",
      title: "S&P 500 Mini",
      value: "0.00",
      price: "2956.00",
      percentage: "0%",
      time: "7:52 AM",
    },
    {
      id: "wti-crude",
      title: "WTI Crude",
      value: "-0.66",
      price: "34.10",
      percentage: "-0.28%",
      time: "7:59 AM",
    },
  ];
  return (
    <StyledFooterContainer>
      <FooterHeading />
      <MarketCards cards={marketData} />
    </StyledFooterContainer>
  );
};