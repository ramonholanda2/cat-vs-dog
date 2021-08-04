import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4rem;
  color: white;
  gap: 5rem;
`;

export const TotalVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ResultTitle = styled.h1`
  font-size: 3rem;
  text-decoration: wavy;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const TotalYourVotes = styled.h2`
  font-size: 2.5rem;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;