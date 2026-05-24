import React, { useEffect } from 'react'
import '../Components/Project.css'
import g2 from '../images/g1.png'
import Phone from '../Components/Phone'
import Button from '../Small/Button'
import v1 from '../images/4.mp4'
import v2 from '../images/4.mp4'
import v3 from '../images/4.mp4'
const Project = () => {

  return (
    <div name="Project" id='Project'>
         <div className="headings">
       <h3>Protfolio of My successful</h3>
        <h1>Projects</h1>
         </div>
     
      <div className="pro-phone">
         <Phone v={v1}></Phone>
        <div className="btn-p">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque molestias ipsum delectus sapiente placeat accusamus mollitia unde provident corporis!</p>
           <Button text="Github" img={g2}></Button>
        </div>
      </div>
      <div className="pro-phone">
         <Phone v={v2}></Phone>
        <div className="btn-p">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque molestias ipsum delectus sapiente placeat accusamus mollitia unde provident corporis!</p>
           <Button text="Github" img={g2}></Button>
        </div>
      </div>
      <div className="pro-phone">
         <Phone v={v3} ></Phone>
        <div className="btn-p">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque molestias ipsum delectus sapiente placeat accusamus mollitia unde provident corporis!</p>
           <Button text="Github" img={g2}></Button>
        </div>
      </div>
     
    </div>
  )
}

export default Project