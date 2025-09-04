import React from 'react';
import styled from 'styled-components';

const NoticesNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2em 4em 0 4em;
  margin-left: 0;
  color: grey;
`;

const NoticesRow = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  
  h2 {
    margin-right: 2rem;
    color: black;
    padding-left: 0;
  }
`;

const NoticesList = styled.ul`
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

const NoticesNav = () => {
  return (
    <NoticesNavContainer className="notices-nav">
      <NoticesRow className="notices-row notices-row-grid">
        <h2>Business</h2>
        <NoticesList className="notices-ul notices-ul-grid">
          <li><a href="#">Tech</a></li>
          <li><a href="#">Econ</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Money</a></li>
          <li><a href="#">DealBook</a></li>
        </NoticesList>
      </NoticesRow>
    </NoticesNavContainer>
  );
};

export default NoticesNav;