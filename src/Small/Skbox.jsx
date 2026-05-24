import React from 'react'
import '../Small/Skbox.css'
import h1 from '../images/h1.png'
import js1 from '../images/js1.png'
const Skbox = (props) => {
   
  return (
    <div className='s-box'>
        <div className="main-box">
            <div className="shadow-box">
        <h3>Programming lang.</h3>
            <div className="mini-box">
            <h3>{props.imgt1}</h3>  
                <img src={props.img1} alt="" />
            </div>
            <div className="mini-box">
            <h3>{props.imgt2}</h3>  
                <img src={props.img2} alt="" />
            </div>
            <div className="mini-box">
            <h3>{props.imgt3}</h3>    
                <img src={props.img3} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skbox