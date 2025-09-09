import React from "react";
import { SectionOne } from "./SectionOne";
import { SectionTwo } from "./SectionTwo";
import { SectionThree } from "./SectionThree";
import { MainContainer, SectionsContainer } from "./StyledMainContainer";
import { NoticesNav } from "./NoticesNav";
export const Main = () => {
  const mainArticle = {
    imageSrc:
      "https://static01.nyt.com/images/2020/05/20/business/20Techfix-illo/20Techfix-illo-jumbo.gif?quality=75&auto=webp",
    imageAlt: "Techfix illustration",
    tag: "TECHFIX",
    date: "May 20, 2020",
    title: "Everything You Need to Know About Slow Internet Speeds",
    description:
      "Our crummy connections are the biggest tech headache in the pandemic. Here's a comprehensive guide to what to do about them.",
    linkHref: "#",
    linkText: "continue reading",
  };
  const latestNewsItems = [
    {
      id: "ln1",
      tag: "THE UPSHOT",
      date: "May 19, 2020",
      title:
        "A Wave of Small Business Closures Is on the Way. Can Washington Stop It?",
      href: "#",
    },
    {
      id: "ln2",
      tag: "NEWS ANALYSIS",
      date: "May 19, 2020",
      title:
        "Coronavirus Shut Down the 'Experience Economy'. Can It Come Back?",
      href: "#",
    },
  ];
  const fastForwardNotices = [
    {
      id: "n1",
      title:
        "Another Grim Tally of U.S. Unemployment is Expected: Live Business Updates",
      subtitle: "Live Stock Market News During the Coronavirus Pandemic",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8AFveEMYmXBOgUGPcmwO_YnO_BPyTZ1C7g&s",
      imageAlt: "notice-one-image",
    },
    {
      id: "n2",
      title: 'How the "Handemic" Movie and Its Falsehoods Spread Widely Online',
      subtitle: "Conspiracy theories about the pandemic have gained more",
      imageSrc:
        "https://news.harvard.edu/wp-content/uploads/2020/04/robin-worrall-FPt10LXK0cg-unsplash.jpg",
      imageAlt: "notice-two-image",
    },
    {
      id: "n3",
      title: "Joe Rogan Strikes an Exclusive, Multiyear Deal With Spotify",
      subtitle: "The deal with Joe Rogan, a provocative podcast, with...",
      imageSrc:
        "https://i.dailymail.co.uk/1s/2020/05/20/19/28631300-0-image-a-18_1589997894255.jpg",
      imageAlt: "notices-three-image",
    },
  ];
  return (
    <MainContainer>
      <NoticesNav />
      <SectionsContainer>
        <SectionOne {...mainArticle} />
        <SectionTwo title="Latest News" items={latestNewsItems} dotsActiveIndex={0} />
        <SectionThree
          title="Fast Forward"
          notices={fastForwardNotices}
          showAllHref="#"
          showAllText="Show All"
        />
      </SectionsContainer>
    </MainContainer>
  );
};