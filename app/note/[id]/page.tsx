import { Note } from '@/components/index'
import { getNote } from '@/lib/prisma'

export default async function NotePage({ params }: { params: { id: string } }) {
  // 动态路由 获取笔记 id
  const noteId = params.id
  const note = await getNote(noteId)

  // 为了让 Suspense 的效果更明显
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
  await sleep(5000)

  if (note === null) {
    return <div> Click a note on the left to view something 🥹</div>
  }

  return (
    <section className="bg-gray-50 shadow h-16 w-full ">
      <Note />
      <div className="container mx-auto flex justify-between items-center">note</div>
    </section>
  )
}
