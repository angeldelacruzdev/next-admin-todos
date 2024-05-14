import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Listo De Todos",
  description: "Listo De Todos, tareas por hacer.",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      {/* TODO: Formulario para agregar todos. */}
      <h1>Rest Todos Page</h1>
      <TodosGrid todos={todos} />
    </div>
  );
}
