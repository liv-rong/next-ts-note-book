// 'use client'

// // import { Button } from '@nextui-org/react'
// import EditIcon from '~icons/line-md/edit'

interface Props {
  noteId?: string | null
  children?: React.ReactNode | null
  edit?: (noteId: string) => void
  add?: () => void
}

export default function EditButton({ noteId, children, edit, add }: Props) {
  const isDraft = noteId == null
  // const handleEdit = () => {
  //   if (!noteId) {
  //     add && add()
  //   } else {
  //     edit && edit(noteId)
  //   }
  // }
  return (
    <button
    // variant="light"
    // size="md"
    // color={isDraft ? 'secondary' : 'primary'}
    // aria-label="Like"
    // onClick={handleEdit}
    >
      342
      {/* <EditIcon /> */}
    </button>
  )
}
