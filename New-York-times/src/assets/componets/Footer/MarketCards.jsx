import { MarketCard } from "./MarketCard";
import { CardsContainer } from "./StyledFooterContainer";
export const MarketCards = (props) => {
  const { cards = [] } = props;
  return (
    <CardsContainer>
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
    </CardsContainer>
  );
};