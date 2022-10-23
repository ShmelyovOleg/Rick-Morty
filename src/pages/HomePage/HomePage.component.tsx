import React, { FC, useCallback, useEffect, useState } from "react";
import { Character, getAllCharacters } from "../../api";
import { Card } from "../../components";
import "./HomePage.scss";

const HomePage: FC = () => {
  const [state, setState] = useState<{
    characters?: Array<Character>;
    info?: any;
    currentPage: number;
  }>({
    currentPage: 1,
  });

  const fetchCharacters = useCallback(() => {
    getAllCharacters(state.currentPage).then(({ results, info }) =>
      setState((prevState) => ({ ...prevState, characters: results, info }))
    );
  }, [state.currentPage]);

  const handleDeleteCharacter = (characterId: number) => {
    setState((prevState) => ({
      ...prevState,
      characters:
        prevState?.characters?.filter(({ id }) => characterId !== id) ??
        undefined,
    }));
  };

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="container">
      <div className="cardsField">
        {state?.characters?.map((character) => (
          <Card
            {...character}
            onDelete={handleDeleteCharacter}
            key={character.id}
          />
        ))}
      </div>
    </div>
  );
};

export { HomePage };
