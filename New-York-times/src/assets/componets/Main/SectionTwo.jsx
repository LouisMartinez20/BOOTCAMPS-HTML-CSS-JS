import {
  SectionTwoContainer,
  TitleTwo,
  Notice,
  NoticeTag,
  NoticeDate,
  NoticeTitle,
  ContinueLinkTwo,
  DotsContainer,
  Dot,
} from "./StyledSectionStyles";
export const SectionTwo = (props) => {
  const {
    title = "Latest News",
    items = [],
    continueText = "continue reading",
    dotsActiveIndex = 0,
    onDotClick,
  } = props;
  return (
    <SectionTwoContainer>
      <TitleTwo>{title}</TitleTwo>
      {items.map((n) => (
        <Notice key={n.id ?? n.title}>
          {n.tag ? <NoticeTag>{n.tag}</NoticeTag> : null}
          {n.date ? <NoticeDate>{n.date}</NoticeDate> : null}
          <NoticeTitle>{n.title}</NoticeTitle>
          <ContinueLinkTwo href={n.href ?? "#"}>{continueText}</ContinueLinkTwo>
        </Notice>
      ))}
      {items.length > 1 ? (
        <DotsContainer aria-label="pagination">
          {items.map((_, idx) => (
            <Dot
              key={idx}
              type="button"
              aria-label={`Go to item ${idx + 1}`}
              aria-current={idx === dotsActiveIndex ? "true" : "false"}
              $active={idx === dotsActiveIndex}
              onClick={onDotClick ? () => onDotClick(idx) : undefined}
            />
          ))}
        </DotsContainer>
      ) : null}
    </SectionTwoContainer>
  );
};