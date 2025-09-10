import {
  StyledSectionTwoContainer,
  StyledTitleTwo,
  StyledNotice,
  StyledNoticeTag,
  StyledNoticeDate,
  StyledNoticeTitle,
  StyledContinueLinkTwo,
  StyledDotsContainer,
  StyledDot,
} from "./StylesSections";
export const SectionTwo = ({
  title = "Latest News",
  items = [],
  continueText = "continue reading",
  dotsActiveIndex = 0,
  onDotClick,
  showDots = true,
}) => {
  return (
    <StyledSectionTwoContainer>
      <StyledTitleTwo>{title}</StyledTitleTwo>
      {items.map((n, idx) => {
        const key = n.id ?? n.title ?? idx;
        return (
          <StyledNotice key={key}>
            {n.tag ? <StyledNoticeTag>{n.tag}</StyledNoticeTag> : null}
            {n.date ? <StyledNoticeDate>{n.date}</StyledNoticeDate> : null}
            <StyledNoticeTitle>{n.title}</StyledNoticeTitle>
            <StyledContinueLinkTwo href={n.href ?? "#"}>
              {continueText}
            </StyledContinueLinkTwo>
          </StyledNotice>
        );
      })}
      {showDots && items.length > 1 ? (
        <StyledDotsContainer aria-label="pagination">
          {items.map((_, idx) => (
            <StyledDot
              key={idx}
              type="button"
              aria-label={`Go to item ${idx + 1}`}
              aria-current={idx === dotsActiveIndex ? "true" : "false"}
              $active={idx === dotsActiveIndex}
              onClick={onDotClick ? () => onDotClick(idx) : undefined}
            />
          ))}
        </StyledDotsContainer>
      ) : null}
    </StyledSectionTwoContainer>
  );
};