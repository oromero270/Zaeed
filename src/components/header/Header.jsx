import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Zaeed.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Zaeed</h1>
        <h5 className="text-light">Chicago Based Artist</h5>
        <CTA/>
        <Socials/>
        {/* Hero Img  */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll</a>
      </div>
    </header>
  )
}

export default Header