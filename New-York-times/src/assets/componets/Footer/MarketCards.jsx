import { MarketCard } from "./MarketCard";
import { StyledCardsContainer } from "./styles";
export const MarketCards = ({ cards = [] }) => {
  return (
    <StyledCardsContainer>
      {cards.map((card) => (
        <MarketCard
          key={card.id ?? card.title}
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