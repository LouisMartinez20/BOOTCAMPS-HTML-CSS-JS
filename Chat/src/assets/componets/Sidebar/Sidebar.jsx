import {
  StyledSidebarWrapper,
  StyledSidebarDecor,
  StyledTopSection,
  StyledSeparator,
  StyledMenuScroll,
  StyledPromoCardWrapper,
} from "./Sidebar.style";
import { SidebarProfile } from "./SidebarProfile";
import { SidebarInfoFields } from "./SidebarInfoFields";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarPromoCard } from "./SidebarPromoCard";
export function Sidebar() {
  return (
    <StyledSidebarWrapper>
      <StyledSidebarDecor />
      <StyledTopSection>
        <SidebarProfile />
        <SidebarInfoFields />
      </StyledTopSection>
      <StyledSeparator />
      <StyledMenuScroll>
        <SidebarMenu />
      </StyledMenuScroll>
      <StyledPromoCardWrapper>
        <SidebarPromoCard />
      </StyledPromoCardWrapper>
    </StyledSidebarWrapper>
  );
}