import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 0 0;
  padding-bottom: 4em;
  border-right: 2px dashed #e0e0e0;
`;

const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 0.5rem;
`;

const Notice = styled.div`
  padding-bottom: 40px;
  
  .span {
    font-size: 0.8rem;
    font-weight: bold;
    color: #888;
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
  
  .date {
    font-size: 0.8rem;
    color: #888;
  }
  
  h3 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    line-height: 1.3;
  }
`;

const ContinueLink = styled.a`
  color: grey;
  text-decoration: none;
  padding-bottom: 14px;
  border-bottom: 1px solid grey;
  
  &:hover {
    color: #567b95;
    border-bottom-color: #567b95;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2.9em;
  
  button {
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    height: 16px;
    width: 16px;
    
    &:first-child {
      background-color: white;
      border: 2px solid black;
    }
  }
`;

const SectionTwo = () => {
  return (
    <SectionContainer className="section-two">
      <Title className="latest-news-title">Latest News</Title>
      
      <Notice className="notice-one">
        <span className="span">THE UPSHOT</span>
        <span className="date">May 19, 2020</span>
        <h3>
          A Wave of Small Business Closures Is on the Way. Can Washington
          Stop It?
        </h3>
        <ContinueLink href="#">continue reading</ContinueLink>
      </Notice>
      
      <Notice className="notice-two">
        <span className="span">NEWS ANALYSIS</span>
        <span className="date">May 19, 2020</span>
        <h3>
          Coronavirus Shut Down the 'Experience Economy'. Can It Come Back?
        </h3>
        <ContinueLink href="#">continue reading</ContinueLink>
      </Notice>
      
      <DotsContainer className="dots">
        <button></button>
        <button></button>
        <button></button>
      </DotsContainer>
    </SectionContainer>
  );
};

export default SectionTwo;