import React from 'react'
import Todo from './Todo'

function Feed() {
  return (
    <div className='h-screen overflow-y-auto bg-gray-100 space-y-2  scrollbar-hide p-2 md:h-screen '>
        <Todo />
        
        
    </div>
  )
}

export default Feed
