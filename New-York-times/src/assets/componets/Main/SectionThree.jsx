import {
  StyledSectionThreeContainer,
  StyledTitleThree,
  StyledNoticeThree,
  StyledNoticeText,
  StyledShowAllLink,
} from "./StylesSections";
export const SectionThree = ({
  title,
  notices,
  showAllHref,
  showAllText,
}) => {
  return (
    <StyledSectionThreeContainer>
      <StyledTitleThree>{title}</StyledTitleThree>
      {notices.map((item) => (
        <StyledNoticeThree key={item.id}>
          <StyledNoticeText>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </StyledNoticeText>
          <img
            src={item.imageSrc}
          />
        </StyledNoticeThree>
      ))}
      <StyledShowAllLink href={showAllHref}>{showAllText}</StyledShowAllLink>
    </StyledSectionThreeContainer>
  );
};