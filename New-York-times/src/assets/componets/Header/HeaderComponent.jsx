import React from "react";
import {
  GlobalStyles,
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
} from "./style";
const HeaderComponent = () => {
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
    <>
      <GlobalStyles />
      <HeaderContainer>
        <NavContainer>
          <NavSuperior>
            <NavLink className="icon-search" href="#">
              <MaterialIcon className="material-symbols-outlined">
                search
              </MaterialIcon>
            </NavLink>
            <NavLink className="icon-notification" href="#">
              <MaterialIcon className="material-symbols-outlined">
                notifications
              </MaterialIcon>
            </NavLink>
            <NYTLogo
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg"
              alt="The New York Times Logo"
              className="nyt-logo"
            />
            <NavLink href="#" className="button-signin">
              SIGN IN
            </NavLink>
            <SubscribeButton href="#" className="button-subscribe">
              SUBSCRIBE
            </SubscribeButton>
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
            <DotsIcon className="dots-icon">
              <MaterialIcon color="#fff" className="material-symbols-outlined">
                more_horiz
              </MaterialIcon>
            </DotsIcon>
          </NavInferior>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};
export default HeaderComponent;
