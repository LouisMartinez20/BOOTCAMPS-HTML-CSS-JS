import styled from "styled-components";
export const SectionContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 0 0;
  padding-bottom: 4em;
  border-right: 2px dashed #e0e0e0;
`;
export const SectionHeader = styled.div`
  margin-bottom: 30px;
`;
export const ImageContainer = styled.div`
  margin-bottom: 30px;
  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    max-height: 200px;
    object-fit: cover;
  }
`;
export const Tag = styled.span`
  color: #ffffff;
  background-color: #000000;
  padding: 10px;
  margin-right: 14px;
`;
export const DateText = styled.span`
  color: rgb(0, 0, 0);
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5em 0;
  line-height: 1.2;
`;
export const Description = styled.p`
  font-size: 15px;
  color: grey;
  line-height: 1.5;
  margin-bottom: 1.5em;
`;
export const ContinueLink = styled.a`
  color: grey;
  text-decoration: none;
  padding-bottom: 14px;
  border-bottom: 1px solid grey;
  &:hover {
    color: #567b95;
    border-bottom-color: #567b95;
  }
`;
export const SectionTwoContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 0 0;
  padding-bottom: 4em;
  border-right: 2px dashed #e0e0e0;
`;
export const TitleTwo = styled.h3`
  font-size: 25px;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
`;
export const Notice = styled.div`
  padding-bottom: 40px;
`;
export const NoticeTag = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #ffffffff;
  background-color: #000000;
  text-transform: uppercase;
  margin-right: 0.5rem;
  padding: 10px;
`;
export const NoticeDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;
export const NoticeTitle = styled.h3`
  font-size: 30px;
  margin: 0.5rem 0;
  line-height: 1.3;
`;
export const ContinueLinkTwo = styled.a`
  color: grey;
  text-decoration: none;
  padding-bottom: 14px;
  border-bottom: 1px solid grey;
  &:hover {
    color: #567b95;
    border-bottom-color: #567b95;
  }
`;
export const DotsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2.9em;
`;
export const Dot = styled.button`
  background-color: ${(p) => (p.$active ? "#ffffff" : "#ccc")};
  border-radius: 50%;
  cursor: pointer;
  border: ${(p) => (p.$active ? "2px solid black" : "none")};
  height: 16px;
  width: 16px;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const SectionThreeContainer = styled.div`
  flex: 1;
  min-width: 220px;
`;
export const TitleThree = styled.h3`
  font-size: 30px;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
`;
export const NoticeThree = styled.div`
  display: flex;
  width: 100%;
  gap: 0;
  justify-content: space-between;
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
export const NoticeText = styled.div`
  width: 50%;
  height: 60%;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  h4 {
    width: 100%;
    margin: 10px 0 0 0;
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
`;
export const ShowAllLink = styled.a`
  color: grey;
  text-decoration: none;
  padding-bottom: 14px;
  border-bottom: 1px solid grey;
  text-align: start;
  margin-top: 1.5rem;
  &:hover {
    color: #567b95;
    border-bottom-color: #567b95;
  }
`;