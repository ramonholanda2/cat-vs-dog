import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  color: white;
`;

export const TotalVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

export const ResultTitle = styled.h1`
  font-size: 3rem;
  text-decoration: wavy;

  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;

export const TotalYourVotes = styled.h2`
  font-size: 2.5rem;
`;