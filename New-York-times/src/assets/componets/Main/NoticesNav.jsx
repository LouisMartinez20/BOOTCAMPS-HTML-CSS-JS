import {
  StyledNoticesNavContainer,
  StyledNoticesRow,
  StyledNoticesList,
} from "./styles";
export const NoticesNav = () => {
  const navItems = ["Tech", "Econ", "Media", "Money", "DealBook"];
  return (
    <StyledNoticesNavContainer>
      <StyledNoticesRow aria-label="Business sections navigation">
        <h2>Business</h2>
        <StyledNoticesList>
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </StyledNoticesList>
      </StyledNoticesRow>
    </StyledNoticesNavContainer>
  );
};
