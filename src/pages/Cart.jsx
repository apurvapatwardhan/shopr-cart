import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
function Cart() {
  const cart = useSelector((state) => state.cart)
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    setTotalAmount(
      cart.reduce((prev, curr) => {
        prev += curr.price
        return prev
      }, 0),
    )
  }, [cart])
  console.log(cart, 'cart')
  return (
    <div>
      {cart.length !== 0 ? (
        <div>
          <div>
            {cart.map((item, index) => (
              <CartItem itemIndex={index} item={item} key={item.id} />
            ))}
          </div>
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>Total Items: {<span>{cart.length}</span>}</p>
            </div>
            <div>
              <p>Total Amount is {totalAmount}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Cart
