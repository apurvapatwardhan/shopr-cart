import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from "../redux/Slices/CartSlice"
import { toast } from 'react-hot-toast';

function Product({post}) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col shadow-xl min-h-[20rem] gap-4 p-4 rounded-2xl hover:scale-110 ease-linear duration-3000'>
      <div>
        <p>{post.title}</p>
      </div>
      <div >
        <p>{post.description.split(' ').slice(0, 10).join(' ')}</p>
      </div>
      <div className='flex justify-center items-center'>
        <img className="" src={post.image} className='min-w-[50%] w-[50%]'></img>
      </div>
      <div className='flex justify-around'>
        <p>{post.price}</p>
        <button>{
        cart.some(ele => ele.id === post.id) ? <p onClick={() => dispatch(remove(post))}>Remove Item</p> : <p onClick={() => {
          dispatch(add(post));
          toast.success('item added to cart')
        }}>Add To Cart</p>
        }</button>
      </div>
      
    </div>
  )
}

export default Product
