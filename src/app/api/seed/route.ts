import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  const create = await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true,
      },
      {
        description: "Piedra del espacio",
      },
      {
        description: "Piedra del agua",
      },
      {
        description: "Piedra del aire",
      },
      {
        description: "Piedra de la realidad",
        complete: true,
      },
    ],
  });

  console.log(create);

  return NextResponse.json({
    message: "Seed execute",
  });
}
