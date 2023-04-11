import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./Modal.css"

function Modal({}) {
    const location = useLocation() 
    console.log(location.state)
  return (
    <div className="modal-container">
        <div className='modal-div'>
<img className='im-modal' src={location.state.image} alt="" />
<h3>{location.state.name}</h3>
<h3>$ {location.state.price}</h3>
{/* <button></button> */}
        </div>

        </div>
  )
}

export default Modal