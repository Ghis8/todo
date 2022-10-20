import { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Header = ({clicked,add}: any) => {
  
  return (
    <div className="p-4 mx-auto text-white bg-gray-600 flex justify-between items-center rounded-t-md">
      <h2 className="text-orange-400 text-xl uppercase">ToDo</h2>
      <div className='flex items-center space-x-2 md:space-x-4 lg:space-x-6'>
        <AiOutlinePlusCircle onClick={add} className='text-xl cursor-pointer hover:text-emerald-600 hover:animate-bounce md:text-2xl lg:text-3xl'/>
        <button onClick={clicked} className="border rounded-md hover:animate-pulse px-1 hover:bg-blue-300 md:text-md lg:text-xl md:px-3 py-1 lg:px-4">Login</button>
      </div>
      
    </div>
  )
}

export default Header
