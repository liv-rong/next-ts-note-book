import React from 'react'
import NotePreview from './NotePreview'

export default async function Note() {
  return (
    <section className="bg-gray-50 shadow h-16 w-full ">
      <div className="container mx-auto flex justify-between items-center">note</div>
      <NotePreview />
    </section>
  )
}
