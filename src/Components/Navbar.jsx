import React from 'react'
import '../Components/Navbar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {

    const [isScrolled,setIsScrolled]=useState(false);
  // let zm=3.4;
    useEffect(()=>{
      const handelScroll=()=>{
          setIsScrolled(window.scrollY>0);       
 };
    window.addEventListener('scroll',handelScroll);
    return ()=>{
      window.removeEventListener('scroll',handelScroll);
    };
  },[])

  const handeltoggle=()=>
  {
    var icon=document.getElementById('toggle-btn');
    icon.classList.toggle('fa-times');
    const ms=document.getElementsByClassName('menu-items');
    ms[0].classList.toggle('visible')

  }

  return (
    <nav className={`navbar ${isScrolled ?'scroll':''}`}>

        <h1>Prayansh</h1>
        <ul className='menu-items '>
            <li className='menu-item'><Link to="Home" duration={500} smooth={true} onClick={handeltoggle}>Home</Link></li>
            <li className='menu-item'><Link to="About" duration={500} smooth={true} onClick={handeltoggle}>About</Link></li>
            <li className='menu-item'><Link to="Project" duration={500} smooth={true} onClick={handeltoggle}>Project</Link></li>
            <li className='menu-item'><Link to="Contact" duration={500} smooth={true} onClick={handeltoggle}>Contact</Link></li>
        </ul>
        <div >
        <i id='toggle-btn'   className="fa-solid fa-bars" onClick={handeltoggle}></i>
        </div>
    </nav>
  )
}

export default Navbar