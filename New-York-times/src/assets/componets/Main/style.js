import styled from "styled-components";
export const MainContainer = styled.main`
  width: 100%;
  height: auto;
`;
export const SectionsContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 400px;
  gap: 3em;
  padding: 0 4em 30px 4em;
`;
export const NoticesNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2em 4em 0 4em;
  margin-left: 0;
  color: grey;
`;
export const NoticesRow = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  h2 {
    margin-right: 2rem;
    color: black;
    padding-left: 0;
  }
`;
export const NoticesList = styled.ul`
  display: flex;
  gap: 3.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  color: grey;
  flex: 1;
  justify-content: flex-start;
  li {
    font-size: 1rem;
    a {
      text-decoration: none;
      color: inherit;
      font-weight: inherit;
      font-family: inherit;
      display: inline-block;
      padding: 0;
      border-bottom: none;
      &:hover {
        text-decoration: underline;
        color: #567b95;
      }
    }
  }
`;
