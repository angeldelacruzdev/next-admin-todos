"use client";

import { useRouter } from "next/navigation";
import { TodosProps } from "../interfaces/todos-props.interface";
import { TodoItem } from "./TodoItem";

import { updateTodo } from "@/todos/helpers/todo";

export const TodosGrid = ({ todos = [] }: TodosProps) => {

  const router = useRouter();


  const toggleTodo = async (id: string, complete: boolean) => {
    console.log(id, complete)
    const updateTodoItem = await updateTodo(id, complete)
    console.log(updateTodoItem)
    router.refresh()

  }

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
