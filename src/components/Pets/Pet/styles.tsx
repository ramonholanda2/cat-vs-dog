import styled, { AnimalProps, keyframes } from "styled-components";

export const PetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 1rem;
  padding-bottom: 4rem;

  background: ${({ isCat }: AnimalProps) => isCat && "rgb(56,8,145)"};
  background: ${({ isDog }) => isDog && "rgb(0,249,255)"};

  background: ${({ isCat }) =>
    isCat &&
    "linear-gradient(150deg, rgba(56,8,145,1) 20%, rgba(0,249,255,1) 100%)"};

  background: ${({ isDog }) =>
    isDog &&
    "linear-gradient(30deg, rgba(56,8,145,1) 0%, rgba(0,249,255) 70%)"};

  color: ${({ isCat }) => isCat && "white"};
`;

export const PetImage = styled.img`
  border-radius: 10px;
  height: 350px;
  max-width: 300px;
  width: 100%;

  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  @media screen and (max-width: 1120px) {
    height: 300px;
    max-width: 250px;
  }

  @media screen and (max-width: 500px) {
    height: 150px;
  }
`;

export const VoteButton = styled.button`
  padding: 1rem 7.3rem;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
  margin-top: 3rem;
  font-weight: 700;

  color: ${({ isCat }: AnimalProps) => isCat && "white"};

  background: ${({ isCat }) =>
    isCat &&
    "linear-gradient(280deg, #380891 60%, rgba(33,106,190,1) 80%, rgba(0,249,255,1) 100%)"};

  background: ${({ isDog }) =>
    isDog &&
    "linear-gradient(280deg, #00f9ff 60%, rgba(33,106,190,1) 80%, rgba(56,8,145,1) 100%)"};

  cursor: pointer;
  transition: transform 0.2s ease-in;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(70%);
  }

  &:hover {
    transform: scale(1.05);

    transition: transform 0.2s ease-in;
  }

  @media screen and (max-width: 1120px) {
    padding: 0.5rem 0;
    max-width: 15rem;
    width: 100%;
    font-size: 1.3rem;
  }
`;

const animateCorectIcon = keyframes`
    
    from {
        filter: opacity(50%) ;
        filter: blur(3px);
        transform: scale(2) translateX(-100px) skewX(10deg);
    }
    to {
        filter: blur(0px);
        transform: scale(1) skewX(0deg);
    }
    `;

export const CorrectSvg = styled.img`
  height: 80px;
  margin: 1rem 0;
  animation: ${animateCorectIcon} 0.5s none 0s ease-in;
`;
