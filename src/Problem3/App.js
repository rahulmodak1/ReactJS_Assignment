import React , {useState} from "react";
import product from "./components/data";
import Modal from "./components/modal";
import './App.css' ;





function Gallery() {
const [model ,setModelShow] = useState(false) ;
const [clickData ,setClickData] = useState([]) ;
const getData = (title , id , img) => {
const clickData = [title , id , img ];
setClickData((item) =>[...clickData])
return setModelShow(true)

}

  return (
    <div>
    <h1>IMAGE GALLERY</h1>
   <div className="main-content">
{product.map((item , index) => (
  <div className="content" key={index}>
<div className="gallery-items">
<div onClick= {() => getData(item.title , item.id , item.img)} className='item'>
<img src={item.img} alt="" />
<div><b>{item.title}</b></div>
Image By: <b>{item.imageBy}</b>


</div>

</div>



  </div>

))}

   </div> 
   {
    model === true ?   <Modal title={clickData[0]} id={clickData[1]}  img={clickData[2]} close ={() => setModelShow(false)}/> : '' 
   }
    
    </div>
 
  );
}

export default Gallery;
