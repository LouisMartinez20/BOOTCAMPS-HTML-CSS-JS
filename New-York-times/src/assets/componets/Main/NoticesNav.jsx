import React from "react";
import { NoticesNavContainer, NoticesRow, NoticesList } from "./StyledMainContainer";
export const NoticesNav = (props) => {
  const {
    title = "Business",
    links = ["Tech", "Econ", "Media", "Money", "DealBook"],
    buildHref, 
    ariaLabel = "Business sections navigation",
  } = props;
  const hrefFor = (link) => (typeof buildHref === "function" ? buildHref(link) : "#");
  return (
    <NoticesNavContainer>
      <NoticesRow aria-label={ariaLabel}>
        <h2>{title}</h2>
        <NoticesList>
          {links.map((link) => (
            <li key={link}>
              <a href={hrefFor(link)}>{link}</a>
            </li>
          ))}
        </NoticesList>
      </NoticesRow>
    </NoticesNavContainer>
  );
};