import React from "react";
import {
  CardWrapper,
  ImagePane,
  MiddleNavigation,
  NavItems,
  NavItem,
  ContentPane,
  TopRow,
  TitleBlock,
  Title,
  Subline,
  InfoSection,
  SectionTitle,
  InfoLines,
  EditButton,
  ActionsMenu,
  SectionHeader,
  RadioGroup,
  DeliveryChoice,
  Muted,
  GlobalStyle,
} from "./style";
export function PizzaComponent({
  title = "Three Topping Pizza - Large",
  author = "Planet Pizza",
  address = "147 N Robertson Blvd, West Hollywood, CA 90048",
  contactName = "Amanda Torres",
  phone = "(949)123-4567",
  onEditInfo,
}) {
  return (
    <>
      <GlobalStyle />
      <div className="page-center">
        <CardWrapper role="region" aria-label="Pizza order details card">
          <ImagePane>
            <img src="/pizza.jpg" alt="Pizza" />
          </ImagePane>
          <MiddleNavigation aria-label="Secciones">
            <NavItems>
              <NavItem $active>
                <span className="material-symbols-outlined">info</span>
                <span>details</span>
              </NavItem>
              <NavItem>
                <span className="material-symbols-outlined">receipt_long</span>
                <span>receipt</span>
              </NavItem>
            </NavItems>
          </MiddleNavigation>
          <ContentPane>
            <TopRow>
              <TitleBlock>
                <Title>{title}</Title>
                <Subline>
                  By{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    {author}
                  </a>
                </Subline>
              </TitleBlock>
              <ActionsMenu aria-label="Más acciones">
                <span className="material-symbols-outlined">more_vert</span>
              </ActionsMenu>
            </TopRow>
            <InfoSection aria-labelledby="info-heading">
              <SectionHeader>
                <SectionTitle id="info-heading">Information</SectionTitle>
                <EditButton
                  type="button"
                  onClick={onEditInfo}
                  aria-label="Editar información"
                >
                  <span className="material-symbols-outlined">edit</span>
                </EditButton>
              </SectionHeader>
              <InfoLines>
                <div>{address}</div>
                <div>
                  {contactName}
                  <Muted style={{ marginLeft: 10 }}>{phone}</Muted>
                </div>
              </InfoLines>
            </InfoSection>
            <InfoSection aria-labelledby="method-heading">
              <SectionHeader></SectionHeader>
              <RadioGroup>
                <DeliveryChoice checked>
                  <span className="radio" />
                  <span>Pickup (Turn-Around: 30 Minutes)</span>
                </DeliveryChoice>
                <DeliveryChoice>
                  <span className="radio" />
                  <span>
                    <Muted>Delivery $5.00(Turn-Around 1 Hour)</Muted>
                  </span>
                </DeliveryChoice>
              </RadioGroup>
            </InfoSection>
          </ContentPane>
        </CardWrapper>
      </div>
    </>
  );
}
export default PizzaComponent;
