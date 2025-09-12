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
          <StyledNavLink href="#" >
            <StyledMaterialIcon >search</StyledMaterialIcon>
          </StyledNavLink>
          <StyledNavLink href="#">
            <StyledMaterialIcon >notifications</StyledMaterialIcon>
          </StyledNavLink>
            <StyledNYTLogo
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
              alt="The New York Times Logo"
            />
          <StyledNavLink href="#">SIGN IN</StyledNavLink>
          <StyledSubscribeButton href="#">SUBSCRIBE</StyledSubscribeButton>
        </StyledNavSuperior>
        <StyledNavInferior >
          <StyledDateParagraph>
            <strong>Thursday</strong> <br /> May 21, 2020
          </StyledDateParagraph>
          <StyledNavList>
            {navItems.map((item) => (
              <StyledNavItem key={item} $first={item === "World"}>
                <a href="#" >
                  {item}
                </a>
              </StyledNavItem>
            ))}
          </StyledNavList>
          <StyledDotsIcon
          >
            <StyledMaterialIcon style={{color: '#fff'}}>
              more_horiz
            </StyledMaterialIcon>
          </StyledDotsIcon>
        </StyledNavInferior>
      </StyledNavContainer>
    </StyledHeaderContainer>
  );
};