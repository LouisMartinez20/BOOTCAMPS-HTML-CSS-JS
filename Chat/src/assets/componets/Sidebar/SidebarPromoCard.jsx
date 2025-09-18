import {
  StyledPromoBlock,
  StyledPromoTitle,
  StyledPromoHighlight,
  StyledPromoDescription,
  StyledPromoButton,
  StyledPromoCardWrapper,
} from "./Sidebar.style";
export function SidebarPromoCard() {
  return (
    <StyledPromoCardWrapper>
      <StyledPromoBlock>
        <StyledPromoTitle>
          Mychats <StyledPromoHighlight>Premium</StyledPromoHighlight>
        </StyledPromoTitle>
        <StyledPromoDescription>
          Experience enhanced features and improved accessibility.
        </StyledPromoDescription>
        <StyledPromoButton>
          Buy Now
        </StyledPromoButton>
      </StyledPromoBlock>
    </StyledPromoCardWrapper>
  );
}