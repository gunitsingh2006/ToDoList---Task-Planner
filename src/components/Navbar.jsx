import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-900 text-white py-2 h-20">
    <img class="h-16 w-16" src="src/assets/1862180.png"/>
    <div className="logo">
      <span className='font-bold text-4xl mx-8'>Task Planner</span>
    </div>
    <ul className="flex gap-8 mx-9">
      <li className='text-2xl font-bold cursor-pointer hover:text-blue-200 transition-all  '>Home</li>
      <li className='text-2xl font-bold cursor-pointer hover:text-blue-200 transition-all '>Your Task</li> 

    </ul>
    </nav>
  )
}

export default Navbar
