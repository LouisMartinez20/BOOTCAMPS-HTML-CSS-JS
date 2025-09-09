import {
  SectionThreeContainer,
  TitleThree,
  NoticeThree,
  NoticeText,
  ShowAllLink,
} from "./StyledSectionStyles";
export const SectionThree = (props) => {
  const {
    title = "Fast Forward",
    notices = [],
    showAllHref = "#",
    showAllText = "Show All",
  } = props;
  return (
    <SectionThreeContainer>
      <TitleThree>{title}</TitleThree>
      {notices.map((item, idx) => {
        const key = item.id ?? item.title ?? idx;
        return (
          <NoticeThree key={key}>
            <NoticeText>
              <h4>{item.title}</h4>
              {item.subtitle ? <p>{item.subtitle}</p> : null}
            </NoticeText>
            {item.imageSrc ? (
              <img src={item.imageSrc} alt={item.imageAlt || "notice-image"} />
            ) : null}
          </NoticeThree>
        );
      })}
      <ShowAllLink href={showAllHref}>{showAllText}</ShowAllLink>
    </SectionThreeContainer>
  );
};