import React, { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Character, getCharacterById } from "../../api";
import { Button } from "../../components";

const CharacterPage: FC = () => {
  const [state, setState] = useState<{
    character?: Character;
    isEdit: boolean;
  }>({
    isEdit: false,
  });

  const params = useParams();

  const fetchCharacter = useCallback((id: number) => {
    getCharacterById(id).then((res) =>
      setState((prevState) => ({
        ...prevState,
        character: res,
      }))
    );
  }, []);

  const toggleMode = () =>
    setState((prevState) => ({
      ...prevState,
      isEdit: !prevState.isEdit,
    }));

  useEffect(() => {
    params.id && fetchCharacter(+params.id);
  }, [fetchCharacter, params.id]);

  return (
    <form
      className="person"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event);
        const values = {
          name: event.currentTarget[0],
          status: event.currentTarget[1],
          species: event.currentTarget[2],
          gender: event.currentTarget[3],
          location: event.currentTarget[4],
        };

        console.log(values);
      }}
    >
      {state.isEdit ? (
        <input
          className="person_name"
          name={"name"}
          defaultValue={state.character?.name}
        />
      ) : (
        <div className="person_name"> {state.character?.name}</div>
      )}

      <div className="person_photo">
        <img src={state.character?.image} alt="person_photo" />
      </div>
      <div className="person_info">
        {state.isEdit ? (
          <input
            className="person_info_input"
            name={"status"}
            defaultValue={state.character?.status}
          />
        ) : (
          <div className="person_info_part">
            Status: {state.character?.status}
          </div>
        )}
        {state.isEdit ? (
          <input
            className="person_info_input"
            defaultValue={state.character?.species}
          />
        ) : (
          <div className="person_info_part">
            Species: {state.character?.species}
          </div>
        )}
        {state.isEdit ? (
          <input
            className="person_info_input"
            defaultValue={state.character?.gender}
          />
        ) : (
          <div className="person_info_part">
            Gender: {state.character?.gender}
          </div>
        )}
        {state.isEdit ? (
          <input
            className="person_info_input"
            defaultValue={state.character?.location.name}
          />
        ) : (
          <div className="person_info_part">
            Location: {state.character?.location.name}
          </div>
        )}
        {state.isEdit ? (
          <input
            className="person_info_input"
            defaultValue={state.character?.origin.name}
          />
        ) : (
          <div className="person_info_part">
            Origin: {state.character?.origin.name}
          </div>
        )}
      </div>
      <div className="editButton">
        {state.isEdit ? (
          <Button onClick={toggleMode} action="edit" type="submit">
            Save
          </Button>
        ) : (
          <Button onClick={toggleMode} action="edit" type="button">
            Edit
          </Button>
        )}
      </div>
    </form>
  );
};

export { CharacterPage };
