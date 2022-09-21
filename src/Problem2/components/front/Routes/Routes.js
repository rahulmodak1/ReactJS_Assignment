import React from 'react'
import { Route , Routes} from 'react-router-dom' ;
import Products from '../Products/Products';
import SignUp from '../signup/signup'
import Cart from '../cart/cart';

function RoutesP({ProductItems , handelAddProduct ,cartItems , handelRemoveProduct}) {

  return (
    <div>
 
  
  <Routes>
    <Route path='/' exact={true} element={<Products ProductItems={ProductItems} handelAddProduct={handelAddProduct}/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/cart' element={<Cart cartItems={cartItems} handelAddProduct={handelAddProduct} handelRemoveProduct={handelRemoveProduct}/>}  />

       
  </Routes>
  
        

    </div>
  )
}

export default RoutesP ;