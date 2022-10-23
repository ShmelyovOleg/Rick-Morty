import React from "react";
import { FC } from "react";
import { ButtonProps } from "./button.types";
import classNames from "classnames";

const Button: FC<ButtonProps> = ({ type, onClick, action, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames("button", action)}
    >
      {children}
    </button>
  );
};

export { Button };
