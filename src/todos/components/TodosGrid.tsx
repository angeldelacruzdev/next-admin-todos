"use client";

import { useRouter } from "next/navigation";
import { TodosProps } from "../interfaces/todos-props.interface";
import { TodoItem } from "./TodoItem";

import { toggleTodo } from "../actions/todo.actions";

export const TodosGrid = ({ todos = [] }: TodosProps) => {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </>
  );
};
