import React from "react";
import {
  StyledNavContainer,
  StyledNavSection,
  StyledSearchWrapper,
  StyledSearchInput,
  StyledNewChatButton,
} from "./Nav.style";
import { NavProfiles } from "./NavProfiles";
export const Nav = () => {
  return (
    <StyledNavContainer>
      <StyledNavSection>
        <NavProfiles />
      </StyledNavSection>
      <StyledSearchWrapper>
        <StyledSearchInput placeholder="Search" />
        <span className="icon">
          <img src="/icons/search.svg" alt="Buscar" />
        </span>
      </StyledSearchWrapper>
      <StyledNewChatButton>New Chats</StyledNewChatButton>
    </StyledNavContainer>
  );
};
