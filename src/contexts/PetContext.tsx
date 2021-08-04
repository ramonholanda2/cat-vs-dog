import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import { database } from "../firebase/index";

import { catAPI } from "../apis/apis";
import { dogAPI } from "../apis/apis";

import axios from "axios";

type TotalVotesInDatabaseProps = {
  cat?: number;
  dog?: number;
};

type Cat = {
  breeds: Array<Object | any>;
  height: Number;
  id: string;
  url: string;
  width: Number;
};

type Dog = {
  message: string;
  status: string;
};

type PetContextType = {
  cat?: Cat;
  dog?: Dog;
  times: Number;
  votesCountDog: number;
  votesCountCat: number;
  totalVotes?: TotalVotesInDatabaseProps;
  isLoadingCat: boolean;
  isLoadingDog: boolean;
  toggleLoading: Boolean;
  voteInPet: (vote: string) => void;
  updateTotalVotes: () => void;
};

type PetContextProviderProps = {
  children: ReactNode;
};

export const PetContext = createContext({} as PetContextType);

export function PetContextProvider({ children }: PetContextProviderProps) {
  const [totalVotes, setTotalVotes] = useState({cat: 0, dog: 0});
  const [times, setTimes] = useState(0);

  const [cat, setCat] = useState();
  const [dog, setDog] = useState();

  const [votesCountDog, setVotesCountDog] = useState(0);
  const [votesCountCat, setVotesCountCat] = useState(0);

  const [toggleLoading, setToggleLoading] = useState(true);
  const [isLoadingCat, setIsLoadingCat] = useState(true);
  const [isLoadingDog, setIsLoadingDog] = useState(true);

  function voteInPet(vote: string) {
    setToggleLoading(!toggleLoading);
    setIsLoadingCat(true);
    setIsLoadingDog(true);

    if (vote === "cat") {
      return setVotesCountCat(votesCountCat + 1);
    }

    if (vote === "dog") {
      return setVotesCountDog(votesCountDog + 1);
    }
  }

  function updateTotalVotes() {
      database
        .collection("votes")
        .doc("RRLeWmfYtEc4tLuluwgU")
        .update({
          cat: totalVotes?.cat + votesCountCat,
          dog: totalVotes?.dog + votesCountDog,
        });
  }

  useEffect(() => {
    if (toggleLoading) {
      setTimes(times + 1); // times === quantidade de votos

      axios
        .get(catAPI)
        .then((result) => {
          setCat(result.data[0]);

          setTimeout(() => {
            setIsLoadingCat(false);
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get(dogAPI)
        .then((result) => {
          setDog(result.data);

          setTimeout(() => {
            setToggleLoading(false);
            setIsLoadingDog(false);
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleLoading]);

  useEffect(() => {
    const unsubscribe = database.collection("votes").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      return setTotalVotes({
        cat: data[0].cat,
        dog: data[0].dog,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PetContext.Provider
      value={{
        cat,
        dog,
        times,
        votesCountDog,
        votesCountCat,
        isLoadingDog,
        totalVotes,
        isLoadingCat,
        toggleLoading,
        voteInPet,
        updateTotalVotes,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export const usePetContext = () => {
  return useContext(PetContext);
};
