import React from 'react';
import * as S from './style';
const PizzaCard = () => {
  return (
    <S.Card>
      <img src ="/pizza.jpg" alt="Pizza"/>
      <S.IconsContainer>
        <S.Icon>
          <span className="material-symbols-outlined">info</span>
        </S.Icon>
        <S.Icon>
          <span className="material-symbols-outlined">receipt</span>
        </S.Icon>
      </S.IconsContainer>

      <S.Content>
        <S.Title>Three Topping Pizza - Large</S.Title>
        <S.Subtitle>
          By <a href="#">Planet Pizza</a>
        </S.Subtitle>

        <S.Info>
          <h1>Information</h1>
          147 N Robertson Blvd, West Hollywood, CA 90048 <br />
          Amanda Torres (949)123-4567
        </S.Info>

        <S.Option>
          <input type="radio" name="delivery" defaultChecked />
          Pickup (Turn-Around: 30 Minutes)
        </S.Option>

        <S.Option>
          <input type="radio" name="delivery" />
          Delivery $5.00 (Turn-Around 1 Hour)
        </S.Option>
      </S.Content>
    </S.Card>
  );
};

export default PizzaCard;
