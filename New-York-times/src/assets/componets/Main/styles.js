import styled from "styled-components";
export const StyledMainContainer = styled.main`
  width: 100%;
  height: auto;
  display: block;
`;
export const StyledSectionsContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 400px;
  gap: 3em;
  padding: 0 4em 0 4em;
  box-sizing: border-box;
  align-items: flex-start;
  @media (max-width: 1200px) {
    gap: 2.5em;
  }
  @media (max-width: 980px) {
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 3em;
  }
  @media (max-width: 640px) {
    padding: 0 1.25em;
    gap: 1.75rem;
  }
`;
export const StyledNoticesNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2em 4em 0 4em;
  margin-left: 0;
  color: grey;
  box-sizing: border-box;
  @media (max-width: 980px) {
    padding: 1.75em 3em 0 3em;
  }
  @media (max-width: 640px) {
    padding: 1.5em 1.25em 0 1.25em;
  }
`;
export const StyledNoticesRow = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h2 {
    margin: 0 2rem 0 0;
    color: #000;
    padding-left: 0;
    font-size: 1.8rem;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  @media (max-width: 640px) {
    h2 {
      font-size: 1.5rem;
      margin-right: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }
`;
export const StyledNoticesList = styled.ul`
  display: flex;
  gap: 3.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  color: grey;
  flex: 1;
  justify-content: flex-start;
  flex-wrap: wrap;
  li {
    font-size: 1rem;
    line-height: 1.2;
    a {
      text-decoration: none;
      color: inherit;
      font-weight: inherit;
      font-family: inherit;
      display: inline-block;
      padding: 0;
      border-bottom: none;
      position: relative;
      transition: color 0.15s ease;
      &:hover {
        text-decoration: underline;
        color: #567b95;
      }
      &:focus-visible {
        outline: 2px solid #567b95;
        outline-offset: 2px;
        border-radius: 2px;
      }
    }
  }
  @media (max-width: 1100px) {
    gap: 2.5rem;
  }
  @media (max-width: 900px) {
    gap: 1.75rem;
  }
  @media (max-width: 640px) {
    gap: 1.1rem;
    li {
      font-size: 0.9rem;
    }
  }
`;
