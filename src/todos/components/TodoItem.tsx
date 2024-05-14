"use client";

import { TodoProps } from "../interfaces/todos-props.interface";

export const TodoItem = ({ todo }: TodoProps) => {
  return (
    <>
      <div>{todo?.description}</div>
    </>
  );
};
