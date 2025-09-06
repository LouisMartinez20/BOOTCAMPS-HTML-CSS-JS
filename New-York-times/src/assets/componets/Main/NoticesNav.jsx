import React from "react";
import { NoticesNavContainer, NoticesRow, NoticesList } from "./style";
const NoticesNav = () => {
  const links = ["Tech", "Econ", "Media", "Money", "DealBook"];
  return (
    <NoticesNavContainer className="notices-nav">
      <NoticesRow className="notices-row notices-row-grid">
        <h2>Business</h2>
        <NoticesList className="notices-ul notices-ul-grid">
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </NoticesList>
      </NoticesRow>
    </NoticesNavContainer>
  );
};
export default NoticesNav;
