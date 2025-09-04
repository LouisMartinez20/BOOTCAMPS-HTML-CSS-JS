// PizzaCard.jsx
import React from "react";
import { 
  GlobalStyle, 
  Card, 
  IconsContainer, 
  Icon, 
  Content, 
  Title, 
  Subtitle, 
  Info, 
  Option 
} from "./style";
const PizzaCard = () => {
  return (
    <>
      <GlobalStyle /> {/* Aplica los estilos globales */}
      <Card>
        <img src="/pizza.jpg" alt="Pizza" />
        <IconsContainer>
          <Icon>
            <span className="material-symbols-outlined">info</span>
          </Icon>
          <Icon>
            <span className="material-symbols-outlined">receipt</span>
          </Icon>
        </IconsContainer>
        <Content>
          <Title>Three Topping Pizza - Large</Title>
          <Subtitle>
            By <a href="#">Planet Pizza</a>
          </Subtitle>
          <Info>
            <h1>Information</h1>
            147 N Robertson Blvd, West Hollywood, CA 90048 <br />
            Amanda Torres (949)123-4567
          </Info>
          <Option>
            <input type="radio" name="delivery" defaultChecked />
            Pickup (Turn-Around: 30 Minutes)
          </Option>
          <Option>
            <input type="radio" name="delivery" />
            Delivery $5.00 (Turn-Around 1 Hour)
          </Option>
        </Content>
      </Card>
    </>
  );
};
export default PizzaCard;
