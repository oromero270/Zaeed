import React from 'react'
import './contact.css'
import {TbMailFast} from 'react-icons/tb'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className='contact_option'>
            <TbMailFast className='contact__icon'/>
            <h4>Email</h4>
            <h5>Your email here</h5>
            <a href="mailto:enteremailhere" target="_blank">Send an E-mail</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact__icon'/>
            <h4>Messanger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/url" target="_blank">Send an IM</a>
          </article>
          <article className='contact_option'>
            <TbMailFast className='contact__icon'/>
            <h4>Whats App</h4>
            <h5>Your number here</h5>
            <a href="https://api.whatsapp.com/send?phone+#######" target="_blank">Whats up!</a>
          </article>
        </div>
        {/* start of form  */}

        {/* Important: There nmusit be an accouin set up in emailsjs.com  */}
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Msg to me.' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact