'use server'

import prisma from "@/lib/prisma"


export const toggleTodo = async (id: string, complete: boolean) => {
    const todo = await prisma.todo.findFirst({ where: { id } })
}