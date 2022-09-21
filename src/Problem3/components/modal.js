import React from 'react'
import './modal.css'

function Modal(props) {
    const style = {
        display: 'block',
        backgroundColor:'rgba(0 ,0 ,0 , 0.8)'
    }
  return (
  
<div className="modal show fade " style={style}>
  <div className="modal-dialog  modal-dialog-centered ">
    <div className="modal-content modal-pop-c">
      <div className="modal-header">
        <h5 className="modal-title">{props.title}</h5>
        <button type="button" className="btn-close" onClick={props.close}></button>
      </div>
      <div className="modal-body pop-img">
        <img src={props.img} alt="" />
      </div>
      
    </div>
  </div>
</div>

    
    

  )
}

export default Modal