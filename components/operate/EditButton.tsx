'use client'

import { Button } from '@nextui-org/react'
import EditIcon from '~icons/line-md/edit'
// import { addNote } from '@/lib/prisma'
interface Props {
  noteId?: string | null
  children?: React.ReactNode | null
}

export default function EditButton({ noteId, children }: Props) {
  // const handleEdit = async () => {
  //   try {
  //     const response = await fetch('/api/addNote', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         title: 'new note',
  //         content: ''
  //       })
  //     })

  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const isDraft = noteId == null
  const handleEdit = () => {
    // const a = addNote({
    //   title: 'new note',
    //   content: ''
    // })
    // console.log(a, '1111')
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
