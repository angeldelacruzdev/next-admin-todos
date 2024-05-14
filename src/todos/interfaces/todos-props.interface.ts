import { Todo } from "@prisma/client";

export interface TodosProps {
  todos?: Todo[];
}

export interface TodoProps {
  todo?: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}
