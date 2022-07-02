import React from 'react'
import './expirience.css'
import {GiTicket} from 'react-icons/gi'
const Expirience = () => {
  return (
    <section id='perfs'>
    <h5>Some Performances </h5>
    <h2>More To Come</h2>

    <div className="container perfs__container">
      <div className="perfs__one">
          <h3>2021</h3>
          <div className="perfs__content">
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
          </div>
      </div>
      <div className="perfs__two">
        <h3>2022</h3>
        <div className="perfs__content">
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
            <article className='perfs__details'>
              <GiTicket className='perfs__details-icon'/>
              <div>
                <h4>Location</h4>
                <small className='text-light'>Audience size</small>
              </div>
            </article>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Expirience