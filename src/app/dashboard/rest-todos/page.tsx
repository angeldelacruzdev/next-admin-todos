import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "Listo De Todos",
  description: "Listo De Todos, tareas por hacer.",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <h1>Rest Todos Page</h1>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
