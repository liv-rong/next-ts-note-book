import React from 'react'
import Link from 'next/link'
import EditButton from '../operate/EditButton'

export default async function Header() {
  return (
    <section className="bg-gray-50 shadow h-16 w-full ">
      <nav>我是头部</nav>

      <EditButton noteId="1">
        <div>编辑</div>
      </EditButton>

      <EditButton>
        <div>新增</div>
      </EditButton>
    </section>
  )
}
