import { MarketCard } from "./MarketCard";
import { StyledCardsContainer } from "./styles";
export const MarketCards = (props) => {
  const cards = props.cards;
  return (
    <StyledCardsContainer>
      {cards.map((card) => (
        <MarketCard
          key={card.id}
          title={card.title}
          value={card.value}
          price={card.price}
          percentage={card.percentage}
          time={card.time}
        />
      ))}
    </StyledCardsContainer>
  );
};