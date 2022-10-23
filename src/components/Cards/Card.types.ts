import { Character } from "../../api";

interface CardProps extends Character {
  onDelete: (id: number) => void;
}

export type { CardProps };
