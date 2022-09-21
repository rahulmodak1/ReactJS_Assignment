import React from "react";
import RoutesP from "./components/front/Routes/Routes"
import product_data from './components/back/data/data';
import Header from "./components/front/Header";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";



const Main = () => {
  const { ProductItems } = product_data;
  const [cartItems, setCartItems] = useState([]);





  const handelAddProduct = (Product) => {
    const productExist = cartItems.find((item) => item.id === Product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === Product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item))
    }
    else {
      setCartItems([...cartItems, { ...Product, quantity: 1 }])
    }
  }  
  const totalItems = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);


  const handelRemoveProduct = (Product) => {
    const productExist = cartItems.find((item) => item.id === Product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== Product.id))
    }
    else {
      setCartItems(cartItems.map((item) => item.id === Product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item)
      )
    }

  }


  return (
    <div>
      <BrowserRouter>
        <Header  totalItems={totalItems}/>
        <RoutesP ProductItems={ProductItems} handelAddProduct={handelAddProduct} cartItems={cartItems} handelRemoveProduct={handelRemoveProduct} />
      </BrowserRouter>



    </div>

  );
}



export default Main;
