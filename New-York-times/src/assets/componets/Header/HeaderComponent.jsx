import React from "react";
import {
  StyledHeaderContainer,
  StyledNavContainer,
  StyledNavSuperior,
  StyledNavInferior,
  StyledNavLink,
  StyledSubscribeButton,
  StyledNYTLogo,
  StyledMaterialIcon,
  StyledDateParagraph,
  StyledNavList,
  StyledNavItem,
  StyledDotsIcon,
} from "./styles";
export const Header = () => {
  const navItems = [
    "World",
    "Politics",
    "Business",
    "Opinion",
    "Tech",
    "Science",
    "Sports",
    "Arts",
    "Books",
    "Style",
    "Food",
    "Travel",
    "Magazine",
  ];
  return (
    <StyledHeaderContainer>
      <StyledNavContainer>
        <StyledNavSuperior>
          <StyledNavLink href="#" aria-label="Search">
            <StyledMaterialIcon $size="22px">search</StyledMaterialIcon>
          </StyledNavLink>
          <StyledNavLink href="#" aria-label="Notifications">
            <StyledMaterialIcon $size="22px">notifications</StyledMaterialIcon>
          </StyledNavLink>
            <StyledNYTLogo
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
              alt="The New York Times Logo"
              loading="lazy"
            />
          <StyledNavLink href="#">SIGN IN</StyledNavLink>
          <StyledSubscribeButton href="#">SUBSCRIBE</StyledSubscribeButton>
        </StyledNavSuperior>
        <StyledNavInferior aria-label="Primary sections">
          <StyledDateParagraph aria-label="Current date">
            <strong>Thursday</strong> <br /> May 21, 2020
          </StyledDateParagraph>
          <StyledNavList>
            {navItems.map((item) => (
              <StyledNavItem key={item} $first={item === "World"}>
                <a href="#" aria-label={item}>
                  {item}
                </a>
              </StyledNavItem>
            ))}
          </StyledNavList>
          <StyledDotsIcon
            type="button"
            aria-label="More sections"
            title="More sections"
          >
            <StyledMaterialIcon $color="#fff" $size="28px">
              more_horiz
            </StyledMaterialIcon>
          </StyledDotsIcon>
        </StyledNavInferior>
      </StyledNavContainer>
    </StyledHeaderContainer>
  );
};