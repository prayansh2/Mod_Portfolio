import React from 'react'
import g1 from '../images/g1.png'
import l1 from '../images/l3.png'
import '../Small/Social.css'
import res from '../Small/prayansh11.pdf'
import {Link} from 'react-router-dom'

const Social = (prop) => {

  const gt=()=>{
     window.open('https://linkedin.com/in/priyanshu-saini135');
  }
  const gt1=()=>{
     window.open('https://github.com/prayansh2');
  }
  return (
    <div className='social'>
      
        <img  src={l1} alt="" onClick={gt}/>
       <img  src={g1} alt=""  onClick={gt1}/>
      
    </div>
  )
}

export default Social