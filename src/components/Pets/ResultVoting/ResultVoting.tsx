import { useEffect } from "react";
import { usePetContext } from "../../../contexts/PetContext";

import {
  ResultContainer,
  ResultTitle,
  TotalYourVotes,
  TotalVotesContainer,
} from "./styles";

const ResultVoting = () => {
  const { votesCountCat, votesCountDog, totalVotes, times, updateTotalVotes } =
    usePetContext();

  useEffect(() => {
    if (times > 5) {
      updateTotalVotes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [times]);

  return (
    <ResultContainer className="confetti">
      <TotalVotesContainer>
        <ResultTitle>
          Vitória dos
          {votesCountCat > votesCountDog ? " Gatos!" : " Cães!"}
        </ResultTitle>
        <TotalYourVotes
          style={votesCountCat > votesCountDog ? { color: "red" } : {}}
        >
          Gato: {votesCountCat} Voto{votesCountCat > 1 && "s"}
        </TotalYourVotes>
        <TotalYourVotes
          style={votesCountDog > votesCountCat ? { color: "red" } : {}}
        >
          Cachorro: {votesCountDog} Voto{votesCountDog > 1 && "s"}
        </TotalYourVotes>
      </TotalVotesContainer>
      <TotalVotesContainer>
        <ResultTitle>Total de votos</ResultTitle>
        <TotalYourVotes
          style={
            totalVotes?.cat !== undefined &&
            totalVotes?.dog !== undefined &&
            totalVotes?.cat > totalVotes?.dog
              ? { color: "red" }
              : {}
          }
        >
          Gato: {totalVotes?.cat} Voto(s)
        </TotalYourVotes>
        <TotalYourVotes
          style={
            totalVotes?.cat !== undefined &&
            totalVotes?.dog !== undefined &&
            totalVotes?.dog > totalVotes?.cat
              ? { color: "red" }
              : {}
          }
        >
          Cachorro: {totalVotes?.dog} Voto(s)
        </TotalYourVotes>
      </TotalVotesContainer>
    </ResultContainer>
  );
};

export default ResultVoting;
