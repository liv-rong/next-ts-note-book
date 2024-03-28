import { NoteType } from './notes'

export interface UserType {
  id: string
  username: string
  notes: NoteType[]
}
