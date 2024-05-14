"use client";

import { TodosProps } from "../interfaces/todos-props.interface";
import { TodoItem } from "./TodoItem";

export const TodosGrid = ({ todos = [] }: TodosProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};
