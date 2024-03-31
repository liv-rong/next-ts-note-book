'use client'

import { useState, useRef, useEffect, useTransition } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ExpandDown, ExpandUp } from '../svg'

// import { ExpandDown } from '../svg/expandDown'
// import { ExpandUp } from '../svg/expandUp'

import IconArrowRight from '~icons/dashicons/arrow-right.jsx'

interface Props {
  id: string
  title: string
  children: React.ReactNode
  expandedChildren: React.ReactNode
}

export default function SidebarNoteContent({ id, title, children, expandedChildren }: Props) {
  // const router = useRouter()
  // const pathname = usePathname()
  // const selectedId = pathname?.split('/')[1] || null

  // const [isPending] = useTransition()
  // const [isExpanded, setIsExpanded] = useState(false)
  // const isActive = id === selectedId

  // // Animate after title is edited.
  const itemRef = useRef(null)
  // const prevTitleRef = useRef(title)

  // useEffect(() => {
  //   if (title !== prevTitleRef.current) {
  //     prevTitleRef.current = title
  //     itemRef.current.classList.add('flash')
  //   }
  // }, [title])

  return (
    <div
      ref={itemRef}
      className="border 1221 w-full h-20 cursor-pointer"
    >
      {children}

      <ExpandDown />
      <ExpandUp />
      <IconArrowRight style={{ fontSize: '2em', color: 'red' }} />

      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation()
        }}
      ></button>
      {expandedChildren}
    </div>
  )
}
