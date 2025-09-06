import React from "react";
import {
  SectionThreeContainer,
  TitleThree,
  NoticeThree,
  ShowAllLink,
} from "./SectionStyles";
const SectionThree = () => {
  return (
    <SectionThreeContainer className="section-three">
      <TitleThree>Fast Forward</TitleThree>
      <NoticeThree className="notices-one">
        <div className="text">
          <h4>
            Another Grim Tally of U.S. Unemployment is Expected: Live Business
            Updates
          </h4>
          <p>Live Stock Market News During the Coronavirus Pandemic</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8AFveEMYmXBOgUGPcmwO_YnO_BPyTZ1C7g&s"
          alt="notice-one-image"
        />
      </NoticeThree>
      <NoticeThree className="notices-two">
        <div className="text">
          <h4>
            How the "Handemic" Movie and Its Falsehoods Spread Widely Online
          </h4>
          <p>Conspiracy theories about the pandemic have gained more</p>
        </div>
        <img
          src="https://news.harvard.edu/wp-content/uploads/2020/04/robin-worrall-FPt10LXK0cg-unsplash.jpg"
          alt="notice-two-image"
        />
      </NoticeThree>
      <NoticeThree className="notices-three">
        <div className="text">
          <h4>Joe Rogan Strikes an Exclusive, Multiyear Deal With Spotify</h4>
          <p>The deal with Joe Rogan, a provocative podcast whit.</p>
        </div>
        <img
          src="https://i.dailymail.co.uk/1s/2020/05/20/19/28631300-0-image-a-18_1589997894255.jpg"
          alt="notices-three-image"
        />
      </NoticeThree>
      <ShowAllLink href="#">Show All</ShowAllLink>
    </SectionThreeContainer>
  );
};
export default SectionThree;
