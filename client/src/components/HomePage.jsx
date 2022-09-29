import React from 'react'
import {
    Button,
    Input
} from '@chakra-ui/react'
export default function HomePage() {
  return (
      <div className="App">
        <h1 className="font-bold text-center my-5 text-xl">TitChat</h1>
        <div className='flex flex-col gap-2 text-center w-3/5 max-w-xl mx-auto'>
          <div className="flex flex-row gap-4">
            <Input placeholder="Room code" />
            <Button colorScheme="green"  >Join room</Button>
          </div>
          <p className="text-lg font-bold text-gray-800 ">
            OR
          </p>
          <Button colorScheme="blue">Create room</Button>
        </div>
      </div>
  )
}
