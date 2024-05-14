"use client";

import { TodosProps } from "../interfaces/todos-props.interface";
import { TodoItem } from "./TodoItem";

import { updateTodo } from "@/todos/helpers/todo";

export const TodosGrid = ({ todos = [] }: TodosProps) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={updateTodo} />
        ))}
      </div>
    </>
  );
};
