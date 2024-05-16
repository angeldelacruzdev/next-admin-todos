import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take))
    return NextResponse.json(
      { message: "Take tiene que ser un número" },
      { status: 400 }
    );

  if (isNaN(skip))
    return NextResponse.json(
      { message: "Skip tiene que ser un número" },
      { status: 400 }
    );

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required("La descripción es requerida."),
  complete: boolean().optional().default(false), //TODO: mostrar algo interesante.
});

export async function POST(req: Request) {
  try {
    const body = await postSchema.validate(await req.json());

    const saved = await prisma.todo.create({
      data: body,
    });

    return NextResponse.json(saved);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    await prisma.todo.deleteMany({
      where: { complete: true },
    });

    return NextResponse.json({ message: "Completados eliminados" });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
