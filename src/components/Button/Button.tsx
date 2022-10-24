import React from "react";
import { FC } from "react";
import { ButtonProps } from "./Button.types";
import classNames from "classnames";
import "./Button.scss";

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
