import React from 'react'
import Todo from './Todo'

function Feed() {
  return (
    <div className='h-screen overflow-y-auto bg-gray-100 space-y-2 scroll-smooth scrollbar-hide p-2 md:h-96 lg:h-96'>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
    </div>
  )
}

export default Feed
