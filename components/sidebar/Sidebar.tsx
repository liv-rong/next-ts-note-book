import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import url from '../../public/star.png'

export default async function Sidebar() {
  return (
    <section className="bg-gray-50 shadow h-screen w-[250px]">
      <Link
        href={'/'}
        className="link--unstyled"
      >
        <section className="flex justify-center space-x-2 py-2">
          <Image
            className="logo"
            src={url}
            width={22}
            height={20}
            alt=""
            role="presentation"
          />
          <strong>next-ts-note-book</strong>
        </section>
      </Link>
      <section
        className="sidebar-menu"
        role="menubar"
      >
        {/* SideSearchField */}
      </section>
      <nav>{/* SidebarNoteList */}</nav>
    </section>
  )
}
