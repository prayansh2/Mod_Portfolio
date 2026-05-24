import React from 'react'
import g2 from '../images/g1.png'
import '../Small/Button.css'
const Button = (prop) => {
 
  return (
    <div className='custom-button'>
      
        <button onClick={prop.fun}>{ (prop.img!=null)?<img src={prop.img} alt="" />:<i className={prop.icon}></i> } {prop.text}</button>
    </div>
  )
}

export default Button