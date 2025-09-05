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
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 0.5rem;
`;
export const Notice = styled.div`
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
export const SectionThreeContainer = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 2em 4% 0 0;
  padding-bottom: 4em;
`;
export const TitleThree = styled.h3`
  font-size: 30px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 0.5rem;
`;
export const NoticeThree = styled.div`
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
