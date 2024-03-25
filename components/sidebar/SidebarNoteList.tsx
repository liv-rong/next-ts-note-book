import { NoteType } from '@/types'

interface Props {
  notes: NoteType[]
}

export default async function NoteList({ notes }: Props) {
  if (notes.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>
  }
  return (
    <ul className="notes-list">
      {notes.map(({ title, content, updatedAt, id }) => {
        return (
          <li key={id}>
            <header className="sidebar-note-header">
              <strong>{title}</strong>
              <small>{updatedAt}</small>
              <span> {updatedAt}</span>
            </header>
          </li>
        )
      })}
    </ul>
  )
}
