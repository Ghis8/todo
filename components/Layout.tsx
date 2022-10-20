import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

function Layout({children}:any) {
  const [toggle,setToggle]=useState(false)
  const [signup,setSignup]=useState(false)
  const [todo,setTodo]=useState(false)
  const [add, setAdd]=useState(false)
  console.log(toggle)
  return (
    <div className="relative mx-auto mt-0 md:w-3/4  lg:w-3/4 md:relative ">
        <Header add={()=>setTodo(!todo)} clicked={()=>{setToggle(!toggle)}}/>
        {
          todo &&
          <div className="absolute top-8  left-2/4 rounded-md text-black z-10 p-10 bg-white shadow-lg">
            
            <>
              <h2 className="uppercase text-orange-500 mb-4 text-center">Add a todo</h2>
              <form className="flex flex-col space-y-4">
                <input type='text' name='title' placeholder="Todo Title" className="border-2 text-sm w-46 h-8 rounded-md indent-2 outline-none"/>
                <textarea className="border-2 border-black-300 h-36 text-xs outline-none"></textarea>
                <button type='submit' className="border bg-blue-400 py-1  w-2/5 rounded-md cursor-pointer">Add</button>
              </form>
            </>
          </div>
        }
        {
          toggle && 
          <div className="absolute top-8  left-2/4 rounded-md text-black z-10 p-10 bg-white shadow-lg">
            {
              signup ?
              <>
              <h2 className="uppercase text-orange-500 mb-4 text-center">Login</h2>
              <form className="flex flex-col space-y-4">
                <input type='text' name='email' placeholder="Email" className="border-2 text-sm w-60 h-8 rounded-md indent-2 outline-none"/>
                <input type='password' name='pwd' placeholder="Password" className="border-2 text-sm h-8 rounded-md indent-2 outline-none" />
                <button type='submit' className="border bg-blue-400 py-1  w-2/5 rounded-md cursor-pointer">Login</button>
              </form>
              </>
              :
              <>
              <h2 className="uppercase text-orange-500 mb-4 text-center">Sign Up</h2>
              <form className="flex flex-col space-y-4">
                <input type='text' name='name' placeholder="Full Name" className="border-2 text-sm w-60 h-8 rounded-md indent-2 outline-none"/>
                <input type='text' name='email' placeholder="Email" className="border-2 text-sm w-60 h-8 rounded-md indent-2 outline-none"/>
                <input type='password' name='pwd' placeholder="Password" className="border-2 text-sm h-8 rounded-md indent-2 outline-none" />
                <input type='password' name='cpwd' placeholder="Confirm Password" className="border-2 text-sm h-8 rounded-md indent-2 outline-none" />
                <button type='submit' className="border bg-blue-400 py-1  w-2/5 rounded-md cursor-pointer">Sign Up</button>
              </form>
              </>
            }
            
            <span className="text-xs mt-5">{signup ? "Don't have an account?" : "Already have an Account ?" }<b className="cursor-pointer hover:text-blue-500" onClick={()=>setSignup(!signup)}> {signup? "Sign Up" : "Login"}</b></span>
          
          </div>
          
        }
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
