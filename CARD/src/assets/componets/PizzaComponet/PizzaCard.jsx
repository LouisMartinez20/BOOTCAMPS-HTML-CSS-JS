import {
  StyledGlobalStyle,
  StyledPageCenter,
  StyledCardWrapper,
  StyledImagePane,
  StyledMiddleNavigation,
  StyledNavItems,
  StyledNavItem,
  StyledContentPane,
  StyledTopRow,
  StyledTitleBlock,
  StyledTitle,
  StyledSubline,
  StyledActionsMenu,
  StyledInfoSection,
  StyledSectionHeader,
  StyledSectionTitle,
  StyledEditButton,
  StyledInfoLines,
  StyledMuted,
  StyledPhoneMuted,
  StyledRadioGroup,
  StyledDeliveryChoice,
  StyledRadioBullet,
  StyledChoiceLabel,
  StyledNavIcon,
  StyledSmallIcon,
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
      <StyledGlobalStyle />
      <StyledPageCenter>
        <StyledCardWrapper role="region" aria-label="Pizza order details card">
          <StyledImagePane>
            <img src="/pizza.jpg" alt="Pizza" />
          </StyledImagePane>
          <StyledMiddleNavigation aria-label="Secciones">
            <StyledNavItems>
              <StyledNavItem $active aria-current="page">
                <StyledNavIcon aria-hidden="true">info</StyledNavIcon>
                <span>details</span>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavIcon aria-hidden="true">receipt_long</StyledNavIcon>
                <span>receipt</span>
              </StyledNavItem>
            </StyledNavItems>
          </StyledMiddleNavigation>
          <StyledContentPane>
            <StyledTopRow>
              <StyledTitleBlock>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubline>
                  By{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    {author}
                  </a>
                </StyledSubline>
              </StyledTitleBlock>
              <StyledActionsMenu type="button" aria-label="Más acciones">
                <StyledSmallIcon aria-hidden="true">more_vert</StyledSmallIcon>
              </StyledActionsMenu>
            </StyledTopRow>
            <StyledInfoSection aria-labelledby="info-heading">
              <StyledSectionHeader>
                <StyledSectionTitle id="info-heading">
                  Information
                </StyledSectionTitle>
                <StyledEditButton
                  type="button"
                  onClick={onEditInfo}
                  aria-label="Editar información"
                >
                  <StyledSmallIcon aria-hidden="true">edit</StyledSmallIcon>
                </StyledEditButton>
              </StyledSectionHeader>
              <StyledInfoLines>
                <div>{address}</div>
                <div>
                  {contactName}
                  <StyledPhoneMuted>{phone}</StyledPhoneMuted>
                </div>
              </StyledInfoLines>
            </StyledInfoSection>
            <StyledInfoSection aria-labelledby="method-heading">
              <StyledSectionHeader>
                <StyledSectionTitle id="method-heading">
                  Method
                </StyledSectionTitle>
              </StyledSectionHeader>
              <StyledRadioGroup role="radiogroup" aria-label="Delivery method">
                <StyledDeliveryChoice
                  role="radio"
                  aria-checked="true"
                  $checked
                  tabIndex={0}
                >
                  <StyledRadioBullet aria-hidden="true" />
                  <StyledChoiceLabel>
                    Pickup (Turn-Around: 30 Minutes)
                  </StyledChoiceLabel>
                </StyledDeliveryChoice>
                <StyledDeliveryChoice
                  role="radio"
                  aria-checked="false"
                  tabIndex={-1}
                >
                  <StyledRadioBullet aria-hidden="true" />
                  <StyledChoiceLabel>
                    <StyledMuted>
                      Delivery $5.00 (Turn-Around 1 Hour)
                    </StyledMuted>
                  </StyledChoiceLabel>
                </StyledDeliveryChoice>
              </StyledRadioGroup>
            </StyledInfoSection>
          </StyledContentPane>
        </StyledCardWrapper>
      </StyledPageCenter>
    </>
  );
}
export default PizzaComponent;
