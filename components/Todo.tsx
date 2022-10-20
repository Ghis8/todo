import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
function Todo() {
  return (
    <div className="flex justify-between items-center border-black border-x border-y cursor-pointer rounded shadow-md hover:shadow-inner hover:bg-slate-200 mx-1 my-1 p-2 ">
        <div className='flex flex-col space-y-2 w-2/4 md:w-3/4 lg:w-3/4'>
            <h2 className='text-emerald-700'>Learn Javascript and TypeScript</h2>
            <p className='text-xs md:text-sm lg:text-base'>
              I have always try to be a good dev. i will keep chasing this dream until i live it
              I have always try to be a good dev. i will keep chasing this dream until i live it
              I have always try to be a good dev. i will keep chasing this dream until i live it
              I have always try to be a good dev. i will keep chasing this dream until i live it
            </p>
        </div>
        <div className='flex items-center space-x-1 md:space-x-3 lg:space-x-4'>
            <AiOutlineEdit className='text-xl  cursor-pointer hover:animate-bounce hover:text-emerald-600'/>
            <BsTrash className='text-xl cursor-pointer hover:animate-bounce hover:text-red-600' />
        </div>
    </div>
  )
}

export default Todo