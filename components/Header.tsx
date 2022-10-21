import { GetServerSideProps } from 'next'
import { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Header = ({clicked,add}: any) => {
  
  return (
    <div className="p-4 mx-auto text-white bg-gray-600 flex justify-between items-center rounded-t-md">
      <h2 className="text-orange-400 text-xl uppercase">ToDo</h2>
      <div className=''>
        <AiOutlinePlusCircle onClick={add} className='text-xl cursor-pointer hover:text-emerald-600 hover:animate-bounce md:text-2xl lg:text-3xl'/>
      </div>
      
    </div>
  )
}

export async function getServerSideProps() {

  return{
    props:{

    }
  }
}

export default Header
