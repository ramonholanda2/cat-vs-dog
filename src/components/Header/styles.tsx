import styled, { AnimalProps } from "styled-components";

declare module "styled-components" {
  export interface AnimalProps {
    isCat: Boolean;
    isDog: Boolean;
  }
}

export const HeaderPage = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-weight: bolder;
  height: 5rem;

  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;

export const Divisor = styled.div`
  background: rgb(56, 8, 145);
  background: linear-gradient(
    90deg,
    rgba(56, 8, 145, 1) 0%,
    rgba(26, 138, 204, 1) 50%,
    rgba(0, 249, 255, 1) 100%
  );

  @media screen and (max-width: 630px) {
    display: none;
  }
`;

export const Option = styled.div`
  display: flex;

  justify-content: ${({ isCat }) => isCat && "flex-end"};
  justify-content: ${({ isDog }) => isDog && "flex-start"};

  background-color: ${({ isCat }: AnimalProps) => isCat && "#380891"};
  background-color: ${({ isDog }: AnimalProps) => isDog && "#00f9ff"};

  color: ${({ isCat }) => isCat && "white"};
  color: ${({ isDog }) => isDog && "black"};

  padding: 1rem 5.3rem;

  font-size: 2.3rem;

  @media screen and (max-width: 630px) {
    padding: 1rem 0;
    justify-content: center;
    font-size: 1.8rem;
  }
`;
