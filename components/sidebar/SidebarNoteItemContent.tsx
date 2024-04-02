'use client'

import { useState, useRef, useEffect, useTransition } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import ExpandDown from '~icons/material-symbols/expand-circle-down-outline'

import ExpandUp from '~icons/material-symbols/expand-circle-up-outline'

interface Props {
  id: string
  title: string
  children: React.ReactNode
  expandedChildren: React.ReactNode
}

export default function SidebarNoteContent({ id, title, children, expandedChildren }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const selectedId = pathname?.split('/')[1] || null
  const [isExpand, setIsExpanded] = useState(false)
  const [isShow, setIsShow] = useState(false)

  // // Animate after title is edited.
  const itemRef = useRef(null)

  return (
    <div
      ref={itemRef}
      className="border relative p-2 w-full min-h-20 cursor-pointer"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      // onClick={() => {
      //   router.push(`/note/${id}`)
      // }}
    >
      {children}
      {isShow && (
        <div
          className="absolute top-2 right-2 transition-all animate-pulse"
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpand)
          }}
        >
          {isExpand ? <ExpandDown className="text-xl" /> : <ExpandUp className="text-xl" />}
        </div>
      )}

      {isExpand && expandedChildren}
    </div>
  )
}
