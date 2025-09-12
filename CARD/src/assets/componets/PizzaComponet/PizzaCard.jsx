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
}) {
  return (
    <>
      <StyledGlobalStyle />
      <StyledPageCenter>
        <StyledCardWrapper>
          <StyledImagePane>
            <img src="/pizza.jpg" alt="Pizza" />
          </StyledImagePane>
          <StyledMiddleNavigation>
            <StyledNavItems>
              <StyledNavItem >
                <StyledNavIcon>info</StyledNavIcon>
                <span>details</span>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavIcon>receipt_long</StyledNavIcon>
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
                  <a href="#" target="_blank" >
                    {author}
                  </a>
                </StyledSubline>
              </StyledTitleBlock>
              <StyledActionsMenu >
                <StyledSmallIcon>more_vert</StyledSmallIcon>
              </StyledActionsMenu>
            </StyledTopRow>
            <StyledInfoSection>
              <StyledSectionHeader>
                <StyledSectionTitle>Information</StyledSectionTitle>
                <StyledEditButton >
                  <StyledSmallIcon>edit</StyledSmallIcon>
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
            <StyledInfoSection>
              <StyledSectionHeader>
                <StyledSectionTitle>Method</StyledSectionTitle>
              </StyledSectionHeader>
              <StyledRadioGroup>
                <StyledDeliveryChoice data-checked="true">
                  <StyledRadioBullet />
                  <StyledChoiceLabel>
                    Pickup (Turn-Around: 30 Minutes)
                  </StyledChoiceLabel>
                </StyledDeliveryChoice>
                <StyledDeliveryChoice data-disabled="true">
                  <StyledRadioBullet />
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
