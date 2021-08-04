import { usePetContext } from "../../../contexts/PetContext";

import loadingCatSvg from "../../../assets/images/loading-cat.svg";
import loadingDogSvg from "../../../assets/images/loading-dog.svg";
import correct from "../../../assets/images/correct.svg";

import { PetContainer, PetImage, VoteButton, CorrectSvg } from "./styles";
import { useState } from "react";

type PetProps = {
  isCat: Boolean;
  isDog: Boolean;
};

const Pet = ({ isCat, isDog }: PetProps) => {
  const { cat, dog, isLoadingCat, isLoadingDog, voteInPet } = usePetContext();

  const [voted, setVoted] = useState(false);

  function precessingVoteInPet() {
    voteInPet(isCat ? "cat" : "dog");

    setVoted(true);

    setTimeout(() => setVoted(false), 2000);
  }

  return (
    <PetContainer isCat={isCat} isDog={isDog}>
      {!isLoadingCat && !isLoadingDog ? (
        <PetImage src={isCat ? cat?.url : dog?.message} />
      ) : (
        <PetImage src={isCat ? loadingCatSvg : loadingDogSvg} />
      )}

      {voted ? (
        <CorrectSvg src={correct} alt="Correct" />
      ) : (
        <VoteButton
          isCat={isCat}
          isDog={isDog}
          disabled={isLoadingCat || isLoadingDog}
          onClick={precessingVoteInPet}
        >
          Votar
        </VoteButton>
      )}
    </PetContainer>
  );
};

export default Pet;
