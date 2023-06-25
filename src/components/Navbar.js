import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsCartFill} from "react-icons/bs"
import { useSelector } from 'react-redux'
function Navbar() {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <div className='flex flex-row justify-around text-white'>
          <NavLink to="/">
            <div><img className='w-[5rem]' src='https://i.pinimg.com/736x/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef--branding.jpg' width={'200'} /></div>
          </NavLink>
          <div className='flex justify-center gap-6 items-center justify-around'>
            <NavLink to="/"><p>Home</p></NavLink>
            <NavLink to="/cart"><div className='relative'><BsCartFill /><span className='flex justify-center items-center absolute bottom-2 bg-green-500 rounded-full w-6 animate-bounce'>{cart.length > 0 ? cart.length :null }</span></div></NavLink>
          </div>
      </div>
    </div>
  )
}

export default Navbar
