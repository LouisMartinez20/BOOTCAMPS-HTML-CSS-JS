import React from 'react';
import styled from 'styled-components';
import MarketCard from './MarketCard';

const CardsContainer = styled.section`
  grid-template-columns: repeat(6, auto);
  display: grid;
  gap: 20px;
`;

// Datos de las tarjetas de mercado
const marketData = [
  {
    title: "Dow Jones mini",
    value: "-40.00",
    price: "24394.00",
    percentage: "-0.51%",
    time: "7:13 AM",
    color: "red"
  },
  {
    title: "Nikkei 225 Future",
    value: "+40.00",
    price: "20580.00",
    percentage: "+0.19%",
    time: "7:17 AM",
    color: "green"
  },
  {
    title: "EUR-USD",
    value: "+0.00014",
    price: "1.0994",
    percentage: "+0.13%",
    time: "7:39 AM",
    color: "green"
  },
  {
    title: "FTSE 100",
    value: "-28.85",
    price: "24394.00",
    percentage: "-0.48%",
    time: "7:41 AM",
    color: "red"
  },
  {
    title: "S&P 500 Mini",
    value: "0.00",
    price: "2956.00",
    percentage: "0%",
    time: "7:52 AM",
    color: "black"
  },
  {
    title: "WTI Crude",
    value: "-0.66",
    price: "34.10",
    percentage: "-0.28%",
    time: "7:59 AM",
    color: "red"
  }
];

const MarketCards = () => {
  return (
    <CardsContainer className="cards-container">
      {marketData.map((card, index) => (
        <MarketCard
          key={index}
          title={card.title}
          value={card.value}
          price={card.price}
          percentage={card.percentage}
          time={card.time}
          color={card.color}
        />
      ))}
    </CardsContainer>
  );
};

export default MarketCards;