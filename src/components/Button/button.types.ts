type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  action: "delete" | "edit" | "save" | "cancel";
  children: string;
};

export type { ButtonProps };
