import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Segment {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  return await prisma.todo.findFirst({
    where: { id },
  });
};

export async function GET(request: Request, { params: { id } }: Segment) {
  const findOne = await getTodo(id);
  if (!findOne)
    return NextResponse.json({ message: "Todo not found " }, { status: 404 });

  return NextResponse.json(findOne);
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params: { id } }: Segment) {
  const findOne = await getTodo(id);
  if (!findOne)
    return NextResponse.json({ message: "Todo not found " }, { status: 404 });

  try {
    const body = await putSchema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { ...body },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
