import Image from 'next/image'

import { Input } from '@nextui-org/react'
import { Button } from '@nextui-org/button'

export default function Home() {
  console.log('Home')
  return (
    <main className="bg-pink-200">
      <div className="flex justify-center">12</div> <Button color="primary">Button</Button>
      <Input
        type="email"
        label="Email"
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      Click a note on the left to view something! 🥺
    </main>
  )
}
