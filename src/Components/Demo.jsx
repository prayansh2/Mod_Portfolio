import React, { useEffect, useState } from 'react'
import './Demo.css'
import img1 from '../images/wt.png'
import img2 from '../images/js1.png'
import img3 from '../images/l2.png'
const Demo = () => {

    let [x,setx]=useState(0);
    let [y,sety]=useState(0);
    const fun=(e)=>{
        x=e.clientX;
        y=e.clientY;
        setx(x);
          sety(y);     
    }

    useEffect(()=>{
    },[x,y])


  return (
    <div className='demo'>
       <h1>hello - {x} {y}</h1>

      <div className="text-img" onMouseOver={fun}>
            <h1>Prayansh</h1>                       
           <div className="img" >
              <div className="circle"></div>
                <img src={img1} alt="" />
       </div>
        </div>
       

      <div className="text-img" onMouseOver={fun}>
            <h1>Prayansh</h1>                       
           <div className="img"  >
                <img src={img2} alt="" style={{top:y,left:x}}/>
       </div>
        </div>


      <div className="text-img" onMouseOver={fun}>
            <h1>Prayansh</h1>                       
           <div className="img"  >
            {/* <div className="circle" style={{top:y,left:x}}></div> */}
                <img src={img3} alt="" style={{top:y,left:x}}/>
        </div>
       </div>
       
      </div>

  )
}

export default Demo