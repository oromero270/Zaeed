import React from 'react'
import './nav.css'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiMicrophone} from 'react-icons/gi'
import {BsCalendar3} from 'react-icons/bs'
import {IoMdShirt} from 'react-icons/io'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {BsMusicNoteBeamed} from 'react-icons/bs'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#perfs" onClick={()=> setActiveNav('#perfs')} className={activeNav === '#perfs' ? 'active' : ''}><GiMicrophone/></a>
      <a href="#calander" onClick={()=> setActiveNav('#calander')} className={activeNav === '#calander' ? 'active' : ''}><BsCalendar3/></a>
      <a href="#merch" onClick={()=> setActiveNav('#merch')} className={activeNav === '#merch' ? 'active' : ''}><IoMdShirt/></a>
      <a href="#music" onClick={()=> setActiveNav('#music')} className={activeNav === '#music' ? 'active' : ''}><BsMusicNoteBeamed/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillChatDotsFill/></a>
    </nav>
  )
}

export default Nav