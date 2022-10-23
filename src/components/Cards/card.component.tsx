import { FC } from "react";
import { CardProps } from "./Card.types";
import "./cards.scss";
import classNames from "classnames";
import { Button } from "../Button";

const Card: FC<CardProps> = ({
  image,
  location,
  name,
  id,
  species,
  status,
  url,
  onDelete,
}) => {
  return (
    <div className="character">
      <div
        className={classNames(
          "character_status",
          status === "Alive" && "character_status-alive",
          status === "Dead" && "character_status-dead",
          status === "unknown" && "character_status-unknown"
        )}
      >
        {status}
      </div>
      <img src={image} alt="Avatar" className="character_image" />
      <div className="character_info">
        <div className="character_name">
          <h2>{name}</h2>
        </div>
        <div className="character_species">
          <h3>Species: {species}</h3>
        </div>
        <div className="character_location">
          <h3>{location.name}</h3>
        </div>
        <div className="deleteCharacter">
          <Button
            type="button"
            onClick={() => onDelete(id)}
            action="delete"
            children="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export { Card };
