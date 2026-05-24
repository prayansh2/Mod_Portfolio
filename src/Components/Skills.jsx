import React from 'react'
import '../Components/Skills.css'
import Skbox from '../Small/Skbox'
import h1 from '../images/h1.png'
import c1 from '../images/c1.png'
import js1 from '../images/js1.png'
import j1 from '../images/j1.png'
import ms1 from '../images/ms1.png'
import sp1 from '../images/sp1.png'
const Skills = () => {
 const imgs=[h1,c1,js1];
  return (
    <div id='skills'>
       <div className="headings">

        <h3>My specilisations</h3>
        <h1>Skills</h1>
       </div>
       <div className="skill">
       <Skbox img1={h1} imgt1={'HTML'} img2={c1} imgt2={'CSS'} img3={js1} imgt3={'Javascript'}></Skbox>
        <Skbox img1={j1} imgt1={'Java'} img2={sp1} imgt2={'SprigBoot'} img3={ms1}imgt3={'My SQL'}></Skbox>
        <Skbox img1={j1} imgt1={'Java'} img2={sp1} imgt2={'SprigBoot'} img3={ms1}imgt3={'My SQL'}></Skbox>
       </div>
    </div>
  )
}

export default Skills