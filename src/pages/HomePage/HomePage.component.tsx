import React, { FC, useCallback, useEffect, useState } from "react";
import { Character, getAllCharacters } from "../../api";
import { Info } from "../../api/types";
import { Card, Pagination, SearchCharacter } from "../../components";
import "./HomePage.scss";

const HomePage: FC = () => {
  const [state, setState] = useState<{
    characters?: Array<Character>;
    info?: Info;
    currentPage: number;
    query?: string;
  }>({
    currentPage: 1,
  });

  const fetchCharacters = useCallback(
    (page: number) => {
      getAllCharacters(page, state.query).then(({ results, info }) =>
        setState((prevState) => ({
          ...prevState,
          characters: results,
          info,
          currenPage: page,
        }))
      );
    },
    [state.query]
  );

  const handleDeleteCharacter = (characterId: number) => {
    setState((prevState) => ({
      ...prevState,
      characters:
        prevState?.characters?.filter(({ id }) => characterId !== id) ??
        undefined,
    }));
  };

  const handleSearch = (query: string) =>
    getAllCharacters(state.currentPage, query).then(({ results, info }) =>
      setState((prevState) => ({
        ...prevState,
        characters: results,
        info,
        query,
      }))
    );

  useEffect(() => {
    fetchCharacters(1);
  }, [fetchCharacters]);

  return (
    <div>
      <div className="container">
        <div className="logo"></div>
        <SearchCharacter onSearch={handleSearch} />
        <div className="cardsField">
          {state?.characters?.map((character) => (
            <Card
              {...character}
              onDelete={handleDeleteCharacter}
              key={character.id}
            />
          ))}
        </div>
        {state.info && (
          <Pagination
            onClick={fetchCharacters}
            page={state.currentPage}
            pages={state.info.pages}
          />
        )}
      </div>
    </div>
  );
};

export { HomePage };
