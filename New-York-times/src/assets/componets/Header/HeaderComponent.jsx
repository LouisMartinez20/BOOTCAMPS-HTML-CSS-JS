import {
  HeaderContainer,
  NavSuperior,
  NavInferior,
  MaterialIcon,
  NavContainer,
  NavLink,
  NYTLogo,
  SubscribeButton,
  DateParagraph,
  NavList,
  NavItem,
  DotsIcon,
} from "./StyledHeaderContainer";
export const HeaderComponent = () => {
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
    <HeaderContainer>
      <NavContainer>
        <NavSuperior>
          <NavLink href="#">
            <MaterialIcon>search</MaterialIcon>
          </NavLink>
          <NavLink href="#">
            <MaterialIcon>notifications</MaterialIcon>
          </NavLink>
          <NYTLogo
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
            alt="The New York Times Logo"
          />
          <NavLink href="#">SIGN IN</NavLink>
          <SubscribeButton href="#">SUBSCRIBE</SubscribeButton>
        </NavSuperior>
        <NavInferior>
          <DateParagraph>
            <strong>Thursday</strong> <br /> May 21, 2020
          </DateParagraph>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item} $first={item === "World"}>
                <a href="#">{item}</a>
              </NavItem>
            ))}
          </NavList>
          <DotsIcon>
            <MaterialIcon $color="#fff">more_horiz</MaterialIcon>
          </DotsIcon>
        </NavInferior>
      </NavContainer>
    </HeaderContainer>
  );
};