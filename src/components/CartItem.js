import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import {remove, add} from "../redux/Slices/CartSlice"

function CartItem({item, itemIndex}) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div onClick={() => dispatch(remove(item))}><FcDeleteDatabase /></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
