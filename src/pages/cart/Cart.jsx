import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {

          const { _id, name, price, image } = item

          if (cartItems[_id] > 0) {

            return (

              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={image} alt="" />
                  <p>{name}</p>
                  <p>${price}</p>
                  <p>{cartItems[_id]}</p>
                  <p>${price * cartItems[_id]}</p>
                  <p onClick={() => removeFromCart(_id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}

      </div>

      <div className="cart-bottom">
        <div className="cart-total">

          <h2>Cart Totals</h2>

          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Charge</p>
              <p> ${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Grand Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/placeorder")}>Proceed To Checkout</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart