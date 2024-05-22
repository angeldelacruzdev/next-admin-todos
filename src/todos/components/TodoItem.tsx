"use client";

import { startTransition, useOptimistic } from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import { ImCheckboxUnchecked } from "react-icons/im";

import { TodoProps } from "../interfaces/todos-props.interface";

import styles from "./TodoItem.module.css";

export const TodoItem = ({ todo, toggleTodo }: TodoProps) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newComplteValue) => ({
      ...state,
      complete: newComplteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic?.complete));

      await toggleTodo(todoOptimistic.id, !todoOptimistic?.complete);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic?.complete));
    }
  };

  return (
    <>
      <div
        className={`${
          todo?.complete ? styles.todoDone : styles.todoPending
        } col-span-4`}
      >
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
          <div
            // onClick={() =>
            //   toggleTodo(`${todoOptimistic?.id}`, !todoOptimistic?.complete)
            // }
            onClick={onToggleTodo}
            className={`flex p-2 rounded-md cursor-pointer  hover:bg-opacity-60 ${
              todoOptimistic?.complete ? "bg-blue-100" : "bg-red-100"
            }`}
          >
            {todoOptimistic?.complete ? (
              <IoCheckboxOutline />
            ) : (
              <ImCheckboxUnchecked />
            )}
          </div>

          <div className="text-center sm:text-left">
            {todoOptimistic?.description}
          </div>
        </div>
      </div>
    </>
  );
};
