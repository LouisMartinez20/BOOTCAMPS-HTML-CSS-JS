import React from "react";
import {
  GlobalStyles,
  HeaderContainer,
  NavContainer,
  NavInferior,
  NavSuperior,
  NavLink,
  NYTLogo,
  SubscribeButton,
  MaterialIcon, 
  NavList,
  NavItem,
  DotsIcon,
  DateParagraph,
} from "../../styles/HeaderStyles";

const HeaderComponent = () => {
  return (
    <GlobalStyles>
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
              <strong>Thursday</strong>
              <br />
              May 21, 2020
            </DateParagraph>

            <NavList>
              <NavItem $first>
                <a href="#">World</a>
              </NavItem>
              <NavItem>
                <a href="#">Politics</a>
              </NavItem>
              <NavItem>
                <a href="#">Business</a>
              </NavItem>
              <NavItem>
                <a href="#">Opinion</a>
              </NavItem>
              <NavItem>
                <a href="#">Tech</a>
              </NavItem>
              <NavItem>
                <a href="#">Science</a>
              </NavItem>
              <NavItem>
                <a href="#">Sports</a>
              </NavItem>
              <NavItem>
                <a href="#">Arts</a>
              </NavItem>
              <NavItem>
                <a href="#">Books</a>
              </NavItem>
              <NavItem>
                <a href="#">Style</a>
              </NavItem>
              <NavItem>
                <a href="#">Food</a>
              </NavItem>
              <NavItem>
                <a href="#">Travel</a>
              </NavItem>
              <NavItem>
                <a href="#">Magazine</a>
              </NavItem>
            </NavList>

            <DotsIcon className="dots-icon">
              <MaterialIcon color="#fff" className="material-symbols-outlined">
                more_horiz
              </MaterialIcon>
            </DotsIcon>
          </NavInferior>
        </NavContainer>
      </HeaderContainer>
    </GlobalStyles>
  );
};

export default HeaderComponent;
