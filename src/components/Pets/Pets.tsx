import Pet from "./Pet/Pet";
import ResultVoting from "./ResultVoting/ResultVoting";

import versus from "../../assets/images/versus.png";

import { usePetContext } from "../../contexts/PetContext";

import { PetsContainer, ImageVersus } from "./styles";

const Pets = () => {
  const { times } = usePetContext();

  return (
    <PetsContainer times={times}>
      {times > 5 ? (
          <ResultVoting />
      ) : (
        <>
          <Pet isCat={true} isDog={false} />
          <ImageVersus src={versus} />
          <Pet isDog={true} isCat={false} />
        </>
      )}
    </PetsContainer>
  );
};

export default Pets;
