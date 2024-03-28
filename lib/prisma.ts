import { PrismaClient } from '@prisma/client'
import { auth } from 'auth'

import { UserType, NoteType } from '../types'

const globalForPrisma = global as any

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getAllNotes(id: string) {
  // const session = await auth()
  // if (session == null) return []
  // 查找登录用户的笔记
  const notes = await prisma.note.findMany({
    where: {
      authorId: id
    }
  })

  return notes
}

export async function addNote(data: NoteType) {
  const session = await auth()
  const result = await prisma.note.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: data.authorId
    }
  })
  return result
}

export async function updateNote(uuid: string, data: NoteType) {
  await prisma.note.update({
    where: {
      id: uuid
    },
    data: {
      title: data.title,
      content: data.content
    }
  })
}

export async function getNote(uuid: string) {
  const { title, content, updateTime, id } = await prisma.note.findFirst({
    where: {
      id: uuid
    }
  })

  return {
    title,
    content,
    updateTime,
    id
  }
}

export async function delNote(uuid: string) {
  await prisma.note.delete({
    where: {
      id: uuid
    }
  })
}

export async function addUser(username: string, password: string) {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      notes: {
        create: []
      }
    }
  })

  return {
    name: username,
    username,
    userId: user.id
  }
}

export async function getUser(username: string, password: string) {
  const user = await prisma.user.findFirst({
    where: {
      username
    },
    include: {
      notes: true
    }
  })
  if (!user) return 0
  if (user.password !== password) return 1
  return {
    name: username,
    username,
    userId: user.id
  }
}

export default prisma
