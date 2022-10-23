import React, { FC } from "react";
import { PaginationProps } from "./Pagination.types";

const Pagination: FC<PaginationProps> = ({ onClick, page, pages }) => {
  const renderButtons: () => Array<JSX.Element> = () => {
    const buttons = [];
    for (let i = 2; i < pages; i++) {
      buttons.push(<button>{i}</button>);
    }
    return buttons;
  };
  return (
    <div className="navigation">
      <button>1</button>
      {renderButtons()}
      <button>{pages}</button>
    </div>
  );
};

export { Pagination };
