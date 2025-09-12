import {
  StyledSectionTwoContainer,
  StyledTitleTwo,
  StyledNotice,
  StyledNoticeTag,
  StyledNoticeDate,
  StyledNoticeTitle,
  StyledContinueLinkTwo,
  StyledDotsContainer,
} from "./StylesSections";
export const SectionTwo = ({
  title = "Latest News",
  items = [],
  continueText = "continue reading",
}) => {
  return (
    <StyledSectionTwoContainer>
      <StyledTitleTwo>{title}</StyledTitleTwo>
      {items.map((item) => (
        <StyledNotice key={item.id}>
          <StyledNoticeTag>{item.tag}</StyledNoticeTag>
          <StyledNoticeDate>{item.date}</StyledNoticeDate>
          <StyledNoticeTitle>{item.title}</StyledNoticeTitle>
          <StyledContinueLinkTwo href={item.href}>
            {continueText}
          </StyledContinueLinkTwo>
        </StyledNotice>
      ))}
      <StyledDotsContainer></StyledDotsContainer>
    </StyledSectionTwoContainer>
  );
};
