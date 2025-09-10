import {
  StyledSectionThreeContainer,
  StyledTitleThree,
  StyledNoticeThree,
  StyledNoticeText,
  StyledShowAllLink,
} from "./StylesSections";
export const SectionThree = ({
  title = "Fast Forward",
  notices = [],
  showAllHref = "#",
  showAllText = "Show All",
}) => {
  return (
    <StyledSectionThreeContainer>
      <StyledTitleThree>{title}</StyledTitleThree>
      {notices.map((item, idx) => {
        const key = item.id ?? item.title ?? idx;
        return (
          <StyledNoticeThree key={key}>
            <StyledNoticeText>
              <h4>{item.title}</h4>
              {item.subtitle ? <p>{item.subtitle}</p> : null}
            </StyledNoticeText>
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt={item.imageAlt || "notice-image"}
                loading="lazy"
              />
            ) : null}
          </StyledNoticeThree>
        );
      })}
      <StyledShowAllLink href={showAllHref}>{showAllText}</StyledShowAllLink>
    </StyledSectionThreeContainer>
  );
};