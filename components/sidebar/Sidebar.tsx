import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import url from '../../public/star.png'
import SidebarNoteList from './SidebarNoteList'
import EditButton from '../operate/EditButton'
import Search from '../search/Search'

export default async function Sidebar() {
  return (
    <section className="bg-gray-50 shadow h-screen w-[250px]">
      <Link href={'/'}>
        <section className="flex justify-center items-center space-x-2 py-2 border h-16">
          <Image
            className="logo"
            src={url}
            width={30}
            height={20}
            alt=""
            role="presentation"
          />
          <strong>next-ts-note-book</strong>
          <EditButton />
        </section>
      </Link>
      <section
        className="sidebar-menu"
        role="menubar"
      >
        {/* SideSearchField */}
      </section>
      <nav>
        <Search />
        <SidebarNoteList />
      </nav>
    </section>
  )
}
