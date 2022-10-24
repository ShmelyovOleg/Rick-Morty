import React, { FC } from "react";
import "./Search.scss";
import { SearchProps } from "./Search.types";

const SearchCharacter: FC<SearchProps> = ({ onSearch }) => {
  return (
    <form
      id="animated"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Search.."
        onChange={(event) => onSearch(event.currentTarget.value)}
      />
    </form>
  );
};

export { SearchCharacter };
