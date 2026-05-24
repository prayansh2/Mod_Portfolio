import React from 'react'
import '../Components/Phone.css'
import ip from '../images/phone.png';
// import v1 from '../images/v1.mp4';
const Phone = (props) => {
  return (
    <div className='phone'>
       <div className='image'>
       <img src={ip} alt="" />
       </div>
        <div className="vid-sec">
        <video id="ved"  autoPlay muted loop>
          <source src={props.v} itemType='video/mp4' />
           </video>
        </div>
    </div>
  )
}

export default Phone