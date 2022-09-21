import React from 'react'
// import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'

function Cart({ cartItems, handelAddProduct, handelRemoveProduct }) {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  // const totalItems = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
  // console.log(totalItems)


  return (
    <div className='cart-items'>
      <div className="cart-items-header">Cart Items</div>
      {/* {totalItems} */}

      {cartItems.length === 0 && <div className='cart-items-empty'>No items are added</div>}

      <div>
        {cartItems.map((item) => (
          <div className="cart-items-list" key={item.id}>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={item.image} alt={item.name} className="cart-items-img" />
            <div className="cart-items-name">
              {item.name}
              <div className="icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i></div>
            </div>
            <div className="cart-items-functions">
              <button className="cart-items-add" onClick={() => handelAddProduct(item)}>+</button>
              <button className="cart-items-remove" onClick={() => handelRemoveProduct(item)}>-</button>
            </div>

            <div className="cart-items-price">
              {item.quantity} * <i className="fa-solid fa-indian-rupee-sign"></i>{item.price}
        
            </div>
          </div>


        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price">
        <i className="fa-solid fa-indian-rupee-sign"></i>{totalPrice}
        </div>

      </div>
    </div>

  );
}

export default Cart