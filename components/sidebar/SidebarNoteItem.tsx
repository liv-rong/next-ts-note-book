import dayjs from 'dayjs'
import SidebarNoteItemContent from './SidebarNoteItemContent'
import { NoteType } from '@/types'

export default function SidebarNoteItem(props: NoteType) {
  const { title, content = '', updatedAt } = props
  return (
    <SidebarNoteItemContent
      id={props.id}
      title={props.title}
      expandedChildren={
        <p>{props.content ? props.content.substring(0, 20) : <i>(No content)</i>}</p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updatedAt).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
    </SidebarNoteItemContent>
  )
}
