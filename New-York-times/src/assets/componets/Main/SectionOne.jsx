import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 0 0;
  padding-bottom: 4em;
  border-right: 2px dashed #e0e0e0;
`;

const SectionHeader = styled.div`
  margin-bottom: 30px;
  
  .image-container {
    margin-bottom: 30px;
    
    img {
      width: 100%;
      max-width: 350px;
      height: auto;
      max-height: 200px;
      object-fit: cover;
    }
  }
  
  .span {
    color: white;
    background-color: black;
    padding: 10px;
    margin-right: 14px;
  }
  
  .date {
    color: rgb(0, 0, 0);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5em 0;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 15px;
  color: grey;
  line-height: 1.5;
  margin-bottom: 1.5em;
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

const SectionOne = () => {
  return (
    <SectionContainer className="section-one">
      <SectionHeader className="section-one-header">
        <div className="image-container">
          <img
            src="https://static01.nyt.com/images/2020/05/20/business/20Techfix-illo/20Techfix-illo-jumbo.gif?quality=75&auto=webp"
            alt="section-one-image"
          />
        </div>
        <span className="span">TECHFIX </span>
        <span className="date"> may 20, 2020</span>
      </SectionHeader>
      <Title>Everything You Need to Know About Slow Internet Speeds</Title>
      <Description>
        Our crummy connections are the biggest tech headache in the
        pandemic. Here's a comprehensive guide to what to do about them.
      </Description>
      <ContinueLink href="#">continue reading</ContinueLink>
    </SectionContainer>
  );
};

export default SectionOne;