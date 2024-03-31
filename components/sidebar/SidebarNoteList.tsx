import { NoteType } from '@/types'
import SidebarNoteItem from './SidebarNoteItem'

export default async function SidebarNoteList() {
  const items: NoteType[] = [
    {
      id: '1',
      title: 'string',
      content: 'string',
      createdAt: '2024-11-09',
      updatedAt: '2023-09-15',
      authorId: '12312'
    },
    {
      id: '2',
      title: 'string',
      content: 'string',
      createdAt: '2024-11-12',
      updatedAt: '2024-11-24',
      authorId: '2313'
    }
  ]
  if (items.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>
  }
  return (
    <ul className="notes-list">
      {items.map((item) => {
        return (
          <SidebarNoteItem
            {...item}
            key={item.id}
          />
        )
      })}
    </ul>
  )
}
