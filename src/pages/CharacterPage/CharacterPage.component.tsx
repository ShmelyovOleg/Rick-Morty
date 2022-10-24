import { Form, Formik } from "formik";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Character, getCharacterById } from "../../api";
import { Button } from "../../components";
import "./CharacterPage.scss";

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
    <>
      {state.character ? (
        <Formik
          initialValues={{
            name: state.character?.name,
            status: state.character.status,
            species: state.character.species,
            gender: state.character.gender,
            location: state.character.location.name,
            origin: state.character.origin.name,
          }}
          onSubmit={(values) => {
            setState((prevState) => ({
              ...prevState,
              character: prevState.character
                ? {
                    ...prevState.character,
                    ...values,
                    location: {
                      name: values.location,
                      url: prevState.character.location.url,
                    },
                    origin: {
                      name: values.origin,
                      url: prevState.character.origin.url,
                    },
                  }
                : undefined,
            }));
            toggleMode();
          }}
        >
          {({ setFieldValue }) => (
            <Form className="person">
              <div className="person_photo">
                <img src={state.character?.image} alt="person_photo" />
              </div>
              <div className="person_info">
                {state.isEdit ? (
                  <div className="person_input">
                    Name:
                    <input
                      className="person_name_input"
                      defaultValue={state.character?.name}
                      onChange={(event) =>
                        setFieldValue("name", event.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="person_name"> {state.character?.name}</div>
                )}
                {state.isEdit ? (
                  <div className="person_input">
                    Status:
                    <input
                      className="person_info_input"
                      defaultValue={state.character?.status}
                      onChange={(event) =>
                        setFieldValue("status", event.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="person_info_part">
                    <strong>Status:</strong> {state.character?.status}
                  </div>
                )}
                {state.isEdit ? (
                  <div className="person_input">
                    Species:
                    <input
                      className="person_info_input"
                      defaultValue={state.character?.species}
                      onChange={(event) =>
                        setFieldValue("species", event.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="person_info_part">
                    <strong>Species:</strong> {state.character?.species}
                  </div>
                )}
                {state.isEdit ? (
                  <div className="person_input">
                    Gender:
                    <input
                      className="person_info_input"
                      defaultValue={state.character?.gender}
                      onChange={(event) =>
                        setFieldValue("gender", event.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="person_info_part">
                    <strong>Gender:</strong> {state.character?.gender}
                  </div>
                )}
                {state.isEdit ? (
                  <div className="person_input">
                    Location:
                    <input
                      className="person_info_input"
                      defaultValue={state.character?.location.name}
                      onChange={(event) =>
                        setFieldValue("location", event.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="person_info_part">
                    <strong>Location:</strong> {state.character?.location.name}
                  </div>
                )}
                {state.isEdit ? (
                  <div className="person_input">
                    Origin:
                    <input
                      className="person_info_input"
                      defaultValue={state.character?.origin.name}
                      onChange={(event) =>
                        setFieldValue("origin", event.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div className="person_info_part">
                    <strong>Origin:</strong> {state.character?.origin.name}
                  </div>
                )}
              </div>
              <div className="editButton">
                {state.isEdit ? (
                  <div className="buttonGroup">
                    <Button onClick={toggleMode} action="cancel" type="reset">
                      Cancel
                    </Button>
                    <Button onClick={() => {}} action="save" type="submit">
                      Save
                    </Button>
                  </div>
                ) : (
                  <Button onClick={toggleMode} action="edit" type="button">
                    Edit
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <></>
      )}
    </>
  );
};

export { CharacterPage };
