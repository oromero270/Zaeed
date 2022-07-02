import React from 'react'
import './about.css'
import ME from '../../assets/Zaeed_casa.jpg'
import {TbMicrophone} from 'react-icons/tb';
import {IoIosCellular} from 'react-icons/io';
import {SiBeatsbydre} from 'react-icons/si';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <TbMicrophone className='about__icon' />
              <h5>Expirience</h5>
              <small>7+ years</small>
            </article>
            <article className='about__card'>
            <IoIosCellular className='about__icon' />
              <h5>Location</h5>
              <small>Chicago</small>
            </article>
            <article className='about__card'>
            <SiBeatsbydre className='about__icon' />
              <h5>Style</h5>
              <small>Latin, Trap, Regeton</small>
              <br />
              <small>The future of Latin music</small>
            </article>

            <p className='details'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio corporis modi at sint ipsum illum laborum quam, tenetur dolore ab voluptatum impedit sequi natus nobis quod, obcaecati autem tempora maiores.
            </p>
            <p className='details'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio corporis modi at sint ipsum illum laborum quam, tenetur dolore ab voluptatum impedit sequi natus nobis quod, obcaecati autem tempora maiores.
            </p>
            <p className='details'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio corporis modi at sint ipsum illum laborum quam, tenetur dolore ab voluptatum impedit sequi natus nobis quod, obcaecati autem tempora maiores.
            </p>
            <p className='details'>
            </p>
            <a href="#contact" className='btn btn-primary'>Lets Connect</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About