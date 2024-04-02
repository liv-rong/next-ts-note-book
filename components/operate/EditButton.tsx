'use client'

import { Button } from '@nextui-org/react'
import EditIcon from '~icons/line-md/edit'
import { addNote } from '@/lib/prisma'
interface Props {
  noteId?: string | null
  children?: React.ReactNode | null
}

export default function EditButton({ noteId, children }: Props) {
  const isDraft = noteId == null
  const handleEdit = () => {
    const a = addNote({
      title: 'new note',
      content: ''
    })
    console.log(a, '1111')
  }
  return (
    <Button
      isIconOnly
      variant="light"
      size="md"
      color={isDraft ? 'secondary' : 'primary'}
      aria-label="Like"
      onClick={handleEdit}
    >
      <EditIcon />
    </Button>
  )
}
