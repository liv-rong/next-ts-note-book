import Image from 'next/image'

import { Button } from '@nextui-org/react'
export default function Home() {
  console.log('Home')
  return (
    <main className="bg-pink-200">
      <Button>dianwo</Button>
      <div className="flex justify-center">12</div>
      Click a note on the left to view something! 🥺
    </main>
  )
}
