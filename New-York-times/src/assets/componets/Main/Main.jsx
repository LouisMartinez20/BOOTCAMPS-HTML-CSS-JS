import React from 'react';
import styled from 'styled-components';
import NoticesNav from './NoticesNav';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

const MainContainer = styled.main`
  width: 100%;
  height: auto;
`;

const SectionsContainer = styled.div`
  display: flex;
  height: auto;
  min-height: 400px;
  gap: 3em;
  padding: 0 4em 30px 4em;
`;

const Main = () => {
  return (
    <MainContainer>
      <NoticesNav />
      <SectionsContainer className="sections">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </SectionsContainer>
    </MainContainer>
  );
};

export default Main;