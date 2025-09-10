import {
  StyledNoticesNavContainer,
  StyledNoticesRow,
  StyledNoticesList,
} from "./styles";
export const NoticesNav = ({
  title = "Business",
  links = ["Tech", "Econ", "Media", "Money", "DealBook"],
  buildHref,
  ariaLabel = "Business sections navigation",
}) => {
  const hrefFor = (link) =>
    typeof buildHref === "function" ? buildHref(link) : "#";
  return (
    <StyledNoticesNavContainer>
      <StyledNoticesRow aria-label={ariaLabel}>
        <h2>{title}</h2>
        <StyledNoticesList>
          {links.map((link) => (
            <li key={link}>
              <a href={hrefFor(link)}>{link}</a>
            </li>
          ))}
        </StyledNoticesList>
      </StyledNoticesRow>
    </StyledNoticesNavContainer>
  );
};