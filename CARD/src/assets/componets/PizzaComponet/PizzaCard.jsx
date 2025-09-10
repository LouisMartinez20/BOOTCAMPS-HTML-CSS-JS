import {
  GlobalStyle,
  PageCenter,
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
  ActionsMenu,
  InfoSection,
  SectionHeader,
  SectionTitle,
  EditButton,
  InfoLines,
  Muted,
  PhoneMuted,
  RadioGroup,
  DeliveryChoice,
  RadioBullet,
  ChoiceLabel,
  NavIcon,
  SmallIcon,
} from "./StyledPizzaComponet";
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
      <PageCenter>
        <CardWrapper role="region" aria-label="Pizza order details card">
          <ImagePane>
            <img src="/pizza.jpg" alt="Pizza" />
          </ImagePane>
          <MiddleNavigation aria-label="Secciones">
            <NavItems>
              <NavItem $active aria-current="page">
                <NavIcon aria-hidden="true">info</NavIcon>
                <span>details</span>
              </NavItem>
              <NavItem>
                <NavIcon aria-hidden="true">receipt_long</NavIcon>
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
              <ActionsMenu type="button" aria-label="Más acciones">
                <SmallIcon aria-hidden="true">more_vert</SmallIcon>
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
                  <SmallIcon aria-hidden="true">edit</SmallIcon>
                </EditButton>
              </SectionHeader>
              <InfoLines>
                <div>{address}</div>
                <div>
                  {contactName}
                  <PhoneMuted>{phone}</PhoneMuted>
                </div>
              </InfoLines>
            </InfoSection>
            <InfoSection aria-labelledby="method-heading">
              <SectionHeader>
                <SectionTitle id="method-heading">Method</SectionTitle>
              </SectionHeader>
              <RadioGroup role="radiogroup" aria-label="Delivery method">
                <DeliveryChoice
                  role="radio"
                  aria-checked="true"
                  $checked
                  tabIndex={0}
                >
                  <RadioBullet aria-hidden="true" />
                  <ChoiceLabel>Pickup (Turn-Around: 30 Minutes)</ChoiceLabel>
                </DeliveryChoice>
                <DeliveryChoice role="radio" aria-checked="false" tabIndex={-1}>
                  <RadioBullet aria-hidden="true" />
                  <ChoiceLabel>
                    <Muted>Delivery $5.00 (Turn-Around 1 Hour)</Muted>
                  </ChoiceLabel>
                </DeliveryChoice>
              </RadioGroup>
            </InfoSection>
          </ContentPane>
        </CardWrapper>
      </PageCenter>
    </>
  );
}
export default PizzaComponent;
