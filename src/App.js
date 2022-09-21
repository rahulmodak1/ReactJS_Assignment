import React , {useState} from "react";
import  Main from './Problem2/App'
import Bmi from "./Problem1/App";
import Gallery from "./Problem3/App";

function App() {
  const [active , setActive] =useState('Home')
  return (
    <div>
    <div>
  {active ==='Shop' && <Main/>}
  {active ==='Bmi' && <Bmi/>}
  {active === 'Gallery' && <Gallery/>}
 </div>
 <div className="buttons" style={{display : 'flex' , justifyContent : "space-evenly" , margin : '2rem'}}>
  <button style={{backgroundColor: 'orangered' , color : 'white' , borderRadius :'0.5rem' , padding :'0.4rem 1.5rem'}}  onClick={() => setActive('Bmi')}>Bmi Calculator</button>
 <button style={{backgroundColor: 'orangered' , color : 'white' , borderRadius :'0.5rem' , padding :'0.4rem 1.5rem'}} onClick={() => setActive('Shop')}>Shopping Cart</button>
 <button style={{backgroundColor: 'orangered' , color : 'white' , borderRadius :'0.5rem' , padding :'0.4rem 1.5rem'}}   onClick={() => setActive('Gallery')}>Image Gallery</button>
    </div>
    </div>

  );
}

export default App;
