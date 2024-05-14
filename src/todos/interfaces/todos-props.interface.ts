import { Todo } from "@prisma/client";

export interface TodosProps {
  todos?: Todo[];
}

export interface TodoProps {
  todo?: Todo;
  //TODO: Acciones que quiero llamar.
}
