import React , {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="sticky top-0 z-50 bg-secondary/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-primary font-bold text-2xl tracking-wide cursor-pointer">
          DevUmair
        </div>

        <ul className="hidden md:flex gap-8 text-md text-gray-300 font-medium">
          <NavLink to="/"><li className="hover:text-primary cursor-pointer">Home</li></NavLink>
          <NavLink to="/about"><li className="hover:text-primary cursor-pointer">About</li></NavLink>
          <NavLink to="/skills"><li className="hover:text-primary cursor-pointer">Skills</li></NavLink>
          <NavLink to="/work"><li className="hover:text-primary cursor-pointer">Work</li></NavLink>
          <NavLink to="/contact"><li className="hover:text-primary cursor-pointer">Contact</li></NavLink>
        </ul>

        <button className="bg-primary text-black px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium cursor-pointer ">
          Hire Me
        </button>

      </div>
    </nav>
  )
}

export default Navbar