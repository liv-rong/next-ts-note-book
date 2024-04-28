'use client'

import { useState } from 'react'
import { saveNote } from './action'

export default function Home() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const handleSave = async () => {
    const res = await saveNote(null, {
      title: title,
      content: content,
      authorId: 'admin'
    })
    console.log(res)
  }
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)] ">
      Click a note on the left to view something 🥹
      <div>
        <form className="border">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
        <form className="border">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
        <button
          className="border "
          onClick={handleSave}
        >
          提交保存
        </button>
      </div>
    </div>
  )
}
