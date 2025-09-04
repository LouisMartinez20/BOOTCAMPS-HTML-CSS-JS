import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 0 0;
  padding-bottom: 4em;
`;

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 0.5rem;
`;

const Notice = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  padding-bottom: 20px;
  justify-content: space-between;
  
  .text {
    width: 50%;
    height: 60%;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    
    h4 {
      width: 100%;
      margin: 10px 0 10px 0;
      font-size: 1rem;
      line-height: 1.3;
    }
    
    p {
      width: 100%;
      margin: 10px 0 10px 0;
      font-size: 0.9rem;
      color: #666;
      line-height: 1.4;
    }
  }
  
  img {
    width: 32%;
    max-width: 120px;
    aspect-ratio: 1 / 1;
    height: auto;
    max-height: 120px;
    object-fit: cover;
    align-self: center;
    margin-left: auto;
  }
`;

const ShowAllLink = styled.a`
  display: block;
  color: grey;
  text-decoration: none;
  padding-bottom: 14px;
  border-bottom: 1px solid grey;
  text-align: center;
  margin-top: 1.5rem;
  
  &:hover {
    color: #567b95;
    border-bottom-color: #567b95;
  }
`;

const SectionThree = () => {
  return (
    <SectionContainer className="section-three">
      <Title>Fast Forward</Title>
      
      <Notice className="notices-one">
        <div className="text">
          <h4>
            Another Grim Tally of U.S. Unemployment is Expected: Live
            Business Updates
          </h4>
          <p>Live Stock Market News During the Coronavirus Pandemic</p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8AFveEMYmXBOgUGPcmwO_YnO_BPyTZ1C7g&s"
          alt="notice-one-image"
        />
      </Notice>
      
      <Notice className="notices-two">
        <div className="text">
          <h4>
            How the "Handemic" Movie and Its Falsehoods Spread Widely Online
          </h4>
          <p>Conspiracy theories about the pandemic have gained more</p>
        </div>
        <img
          src="https://news.harvard.edu/wp-content/uploads/2020/04/robin-worrall-FPt10LXK0cg-unsplash.jpg"
          alt="notice-two-image"
        />
      </Notice>
      
      <Notice className="notices-three">
        <div className="text">
          <h4>
            Joe Rogan Strikes an Exclusive, Multiyear Deal With Spotify
          </h4>
          <p>The deal with Joe Rogan, a provocative podcast whit.</p>
        </div>
        <img
          src="https://i.dailymail.co.uk/1s/2020/05/20/19/28631300-0-image-a-18_1589997894255.jpg"
          alt="notices-three-image"
        />
      </Notice>
      
      <ShowAllLink href="#">Show All</ShowAllLink>
    </SectionContainer>
  );
};

export default SectionThree;