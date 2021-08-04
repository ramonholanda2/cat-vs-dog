import styled, { ContVote } from "styled-components";

declare module "styled-components" {
  export interface ContVote {
    times: Number;
  }
}

export const PetsContainer = styled.div`
  min-height: calc(100vh - 5rem);
  display: grid;
  grid-template-columns: ${({ times }: ContVote) =>
    times > 5 ? "1fr" : "repeat(2, 1fr)"};

  background: rgb(0, 249, 255);
  background: linear-gradient(
    266deg,
    rgba(0, 249, 255, 1) 33%,
    rgba(18, 169, 219, 1) 45%,
    rgba(33, 104, 189, 1) 50%,
    rgba(43, 61, 169, 1) 55%,
    rgba(56, 8, 145, 1) 67%
  );
`;
export const ImageVersus = styled.img`
  position: absolute;

  margin: auto;
  top: 0;
  bottom: 5rem;
  left: 0;
  right: 0;
  
  height: 15rem;
  
  @media screen and (max-width: 1120px) {
    height: 10rem;
    bottom: 80%;
  }
  
  @media screen and (max-width: 800px) {
    height: 5rem;
    bottom: calc(100vh - 200px);
  }
`;
